const bcrypt = require('bcrypt');
const { Account } = require('../models');

const { getMessage } = require('../Helpers/Validator');
const { generateJwt, generateRefreshJwt, verifyRefreshJwt, getTokenFromHeaders } = require('../Helpers/Jwt');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const account = await Account.findOne({ where: { email } });

    const match = account ? bcrypt.compareSync(password, account.password) : null;
    if (!match) {
      return res.jsonBadRequest(null, getMessage('account.signin.invalid'));
    }

    const token = generateJwt({ id: account.id });
    const refreshToken = generateRefreshJwt({ id: account.id, version: account.jwtVersion });

    return res.jsonOK(account, getMessage('account.signin.success'), { token, refreshToken });
  },

  async refresh(req, res) {
    const token = getTokenFromHeaders(req.headers);

    if (!token) {
      return res.jsonUnauthorized(null, 'Invalid Token');
    }

    try {
      const decoded = verifyRefreshJwt(token);
      const account = await Account.findByPk(decoded.id);
      if (!account) {
        return res.jsonUnauthorized(null, 'Invalid Token');
      }
      if (decoded.version !== account.jwtVersion) {
        return res.jsonUnauthorized(null, 'Invalid Token');
      }

      const meta = {
        token: generateJwt({ id: account.id })
      }

      return res.jsonOK(null, null, meta)
    } catch (error) {
      return res.jsonUnauthorized(null, 'Invalid Token');
    }

  },

  async create(req, res) {
    const { email, password } = req.body;

    const account = await Account.findOne({ where: { email } });
    if (account) {
      return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));
    }

    const hash = bcrypt.hashSync(password, 8);
    const newAccount = await Account.create({ email, password: hash });

    const token = generateJwt({ id: newAccount.id });
    const refreshToken = generateRefreshJwt({ id: newAccount.id, version: newAccount.jwtVersion });

    return res.jsonOK(newAccount, getMessage('account.signup.success'), { token, refreshToken });
  }

};
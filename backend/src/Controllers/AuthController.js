const bcrypt = require('bcrypt');
const { Account } = require('../models');

const { getMessage } = require('../Helpers/Validator');

module.exports = {
  async login(req, res) {
    return res.jsonOK(null)
  },

  async create(req, res) {
    const { email, password } = req.body;

    const account = await Account.findOne({ where: { email } });
    if (account) {
      return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));
    }

    const hash = bcrypt.hashSync(password, 8);
    const newAccount = await Account.create({ email, password: hash });

    return res.jsonOK(newAccount, getMessage('account.signup.success'));
  }

};
const bcrypt = require('bcrypt');
const { Account } = require('../models');
module.exports = {
  async login(req, res) {
    return res.json('está nessa rota aki ')
  },

  async create(req, res) {
    const { email, password } = req.body;

    const account = await Account.findOne({ where: { email } });
    if (account) {
      return res.jsonBadRequest(null, 'Account already exists.');
    }

    const hash = bcrypt.hashSync(password, 8);
    const newAccount = await Account.create({ email, password: hash });

    return res.jsonOK(newAccount, 'Account created');
  }

};
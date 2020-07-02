const bcrypt = require('bcrypt');
const { Account } = require('../models');
module.exports = {
  async login(req, res) {
    return res.json('está nessa rota aki ')
  },

  async create(req, res) {
    const email = 'ledulzeee@gmail.com';
    const password = '123456';
    const hash = bcrypt.hashSync(password, 8);
    const result = await Account.create({email, password: hash});
    
    return res.json(result);
  }

};
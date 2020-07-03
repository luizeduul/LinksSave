const { Link } = require('../models');

const { getMessage } = require('../Helpers/Validator');

module.exports = {
  async show(req, res) {
    const accountId = 1;  //req.id;
    const { id } = req.params;
    const link = await Link.findOne({ where: { id, accountId } });
    if (!link) return res.jsonNotFound();

    return res.jsonOK(link);
  },

  async index(req, res) {
    const accountId = 1;  //req.id;
    const links = await Link.findAll({ where: { accountId } });
    if (!links) return res.jsonNotFound();

    return res.jsonOK(links);
  },

  async store(req, res) {
    const { label, url, isSocial } = req.body;
    const accountId = 1;  //req.id;

    const image = 'https://placehold.it/500x500?text=SEM%20TITULO';

    const link = await Link.create({
      label,
      url,
      isSocial,
      image,
      accountId
    });
    return res.jsonOK(link)
  },

  async update(req, res) {
    const accountId = 1;  //req.id;
    const { id } = req.params;
    const { body } = req;

    const fields = ['label', 'url', 'isSocial'];

    const link = await Link.findOne({ where: { id, accountId } });

    if (!link) return res.jsonNotFound();

    fields.map(fieldName => {
      const newValue = body[fieldName];

      if (newValue != undefined) {
        link[fieldName] = newValue;
      }
    });

    await link.save();

    return res.jsonOK(link);

  },

  async destroy(req, res){
    const accountId = 1;  //req.id;
    const { id } = req.params;
    const link = await Link.findOne({ where: { id, accountId } });
    if (!link) return res.jsonNotFound();

    await link.destroy();

    return res.jsonOK();
  }

};
const Joi = require('@hapi/joi');

const { getValidatorError } = require('../Helpers/Validator');


const AccountSignUp = (req, res, next) => {
  const { email, password, password_confirmation } = req.body;
  const Schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{3,30}$')),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required()
  });

  const options = { abortEarly: false }

  const { error } = Schema.validate({ email, password, password_confirmation }, options);

  if (error) {
    const messages = getValidatorError(error, 'account.signup');

    return res.jsonBadRequest(null, null, { error: messages })
  }
  next();
};


module.exports = {
  AccountSignUp,
}
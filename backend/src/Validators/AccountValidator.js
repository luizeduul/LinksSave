const Joi = require('@hapi/joi');

const { getValidatorError } = require('../Helpers/Validator');

const rules = {
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{3,30}$')),
  password_confirmation: Joi.string().valid(Joi.ref('password')).required()
}

const options = { abortEarly: false }

const AccountSignIn = (req, res, next) => {
  const { email, password } = req.body;
  const Schema = Joi.object().keys({
    email: rules.email,
    password: rules.password,
  });

  const { error } = Schema.validate({ email, password }, options);

  if (error) {
    const messages = getValidatorError(error, 'account.signin');

    return res.jsonBadRequest(null, null, { error: messages })
  }

  next();
}


const AccountSignUp = (req, res, next) => {
  const { email, password, password_confirmation } = req.body;
  const Schema = Joi.object().keys({
    email: rules.email,
    password: rules.password,
    password_confirmation: rules.password_confirmation,
  });

 

  const { error } = Schema.validate({ email, password, password_confirmation }, options);

  if (error) {
    const messages = getValidatorError(error, 'account.signup');

    return res.jsonBadRequest(null, null, { error: messages })
  }
  next();
};



module.exports = {
  AccountSignUp,
  AccountSignIn,
}
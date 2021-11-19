const Joi = require('joi');

const cnst = require('../conf/constants');

module.exports = {
    authData: Joi.object({
        username: Joi
            .string()
            .trim()
            .regex(cnst.USERNAME_REGEXP)
            .required(),
        password: Joi
            .string()
            .trim()
            .regex(cnst.PASSWORD_REGEXP)
            .required(),
    })
};

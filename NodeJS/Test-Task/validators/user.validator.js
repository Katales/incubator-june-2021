const Joi = require('joi');

const cnst = require('../conf/constants');

module.exports = {
    newUserData: Joi.object({
        first_name: Joi
            .string()
            .trim()
            .regex(cnst.NAME_REGEXP)
            .required(),
        last_name: Joi
            .string()
            .trim()
            .regex(cnst.NAME_REGEXP)
            .required(),
        username: Joi
            .string()
            .trim()
            .regex(cnst.USERNAME_REGEXP)
            .required(),
        email: Joi
            .string()
            .trim()
            .regex(cnst.EMAIL_REGEXP)
            .required(),
        password: Joi
            .string()
            .trim()
            .regex(cnst.PASSWORD_REGEXP)
            .required(),
        user_type: Joi
            .string()
            .valid(...Object.values(cnst.USER_TYPE))
    }),
    updUserData: Joi.object({
        first_name: Joi
            .string()
            .trim()
            .regex(cnst.NAME_REGEXP),
        last_name: Joi
            .string()
            .trim()
            .regex(cnst.NAME_REGEXP),
        username: Joi
            .string()
            .trim()
            .regex(cnst.USERNAME_REGEXP),
        email: Joi
            .string()
            .trim()
            .regex(cnst.EMAIL_REGEXP)
            .required(),
        password: Joi
            .string()
            .trim()
            .regex(cnst.PASSWORD_REGEXP)
            .required(),
        user_type: Joi
            .string()
            .valid(...Object.values(cnst.USER_TYPE))
    })
};

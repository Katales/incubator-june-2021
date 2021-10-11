const validator = require('../validators/user.validator');

// *****  MIDDLEWARE
module.exports = {

    newUser: async (req, res, next) => {
        try {
            const {error, value} = validator.newUserData.validate(req.body);
            if (error) {
                res.json('Validation failed! '+error);
                return;
            }
            next();
        } catch (e) {
            res.json(e);
        }
    },

    updUserById: async (req, res, next) => {
        try {
            if (!someFieldsDefined(req.body)) {
                res.json('None of a collection fields were set!');
                return;
            }
            const {error, value} = validator.updUserData.validate(req.body);
            if (error) {
                res.json('UpdateUserById: field validation failed! ' + error);
                return;
            }
            next();
        } catch (e) {
            res.json(e);
        }
    }
}

function someFieldsDefined(rec) {
    if (rec.name !== undefined) return true;
    if (rec.email !== undefined) return true;
    if (rec.password !== undefined) return true;
    return rec.userdomain !== undefined;
}

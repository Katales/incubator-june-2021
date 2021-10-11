const validator = require('../validators/auth.validator');

//  MIDDLEWARE
module.exports = {

    authFieldsExist: (req, res, next) => {
        try {
            const {error, value} = validator.authData.validate(req.body);
            if (error) {
                res.json('Validation failed! ' + error);
                return;
            }
            next();
        } catch (e) {
            res.json(e);
        }

    }
}
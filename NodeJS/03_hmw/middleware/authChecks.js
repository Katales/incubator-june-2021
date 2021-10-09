//  MIDDLEWARE
module.exports = {

    fieldsExist: (req, res, next) => {
        try{
            if (!req.body.email ||
                !req.body.password) {
                throw new Error('"email" and "password" are mandatory fields!');
            }
            next();
        } catch (e) {
            res.json(e);
        }

    }
}
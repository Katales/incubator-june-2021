// noinspection ExceptionCaughtLocallyJS

const userMod = require('./../db/user.model');
const ApiError = require("../errors/ApiError.class");

// *****  MIDDLEWARE
module.exports = {

    newUser: async (req, res, next) => {
        try {
            const q = await userMod.findOne({username: req.body.username});
            if (q) {
                throw new ApiError(`User with this username ${req.body.username} already exists`,
                    400, 'Data Validation failed (user)!');
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    updUserByUsername: async (req, res, next) => {
        try {
            if (req.body.username) {
                const qq = await userMod.find({username: req.body.username});
                if (qq.length === 1 && req.params.username !== qq[0].username) {
                    throw new ApiError(`Username ${req.body.username} belongs to another user!`,
                        400, 'Data Validation failed (user)!');
                }
            }
            next();
        } catch (e) {
            next(e);
        }
    }
};


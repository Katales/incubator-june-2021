// noinspection ExceptionCaughtLocallyJS

const userMod = require('./../db/user.model');
const pwdSrv = require('../services/password');
const ApiError = require("../errors/ApiError.class");
const authMod = require("../db/auth.model");

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const qq = await userMod.find();
            res.json(qq.map(q => q.normalize()));
        } catch (e) {
            next(e);
        }
    },

    getUserByUsername: async (req, res, next) => {
        try {
            const {username} = req.params;
            const q = (await userMod.findOne({username}));
            if (!q) {
                throw new ApiError(`User ${username} doesn't exist.)`,
                    400, 'Error!');
            }
            res.json(q.normalize());
        } catch (e) {
            next(e);
        }
    },

    newUser: async (req, res, next) => {
        try {
            req.body.password = await pwdSrv.mkHash(req.body.password);
            const q = (await userMod.create(req.body));
            if (!q) {
                throw new ApiError('User wasn\'t added to DB',
                    400, 'Error!');
            }
            res.json(q.normalize());
        } catch (e) {
            next(e);
        }
    },

    updUserByUsername: async (req, res, next) => {
        try {
            if (req.body.password) {
                req.body.password = await pwdSrv.mkHash(req.body.password);
            }
            const {username} = req.params;
            const q = await userMod.findOneAndUpdate({username}, req.body,
                {
                    new: true,
                    runValidators: true
                }
            );
            if (!q) {
                throw new ApiError(`User ${username} doesn't exist.`,
                    400, 'Error!');
            }
            res.json(q.normalize());
        } catch (e) {
            next(e);
        }
    },

    delUserByUsername: async (req, res, next) => {
        try {
            const {username} = req.params;
            const q = await userMod.findOneAndDelete({username});
            if (!q) {
                throw new ApiError(`User ${username} doesn't exist.`,
                    400, 'Error!');
            }
            await authMod.deleteMany({username: q.username});
            res.json(q.normalize());
        } catch (e) {
            next(e);
        }
    }
};

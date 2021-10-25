const userMod = require('../db/user.model');
const authMod = require('../db/auth.model');
const pwdSrv = require('../services/password');
const tknSrv = require("../services/token.services");
const miscSrv = require('../services/misc.services');
const ApiError = require('../errors/ApiError.class');
// const {normalizeMngUser} = require("../services/misc.services");
// const {TKN} = require("../conf/constants");

const testUserCred = async (email, password) => {
    const q = await userMod.findOne({email});
    if (!q ||
        !(await pwdSrv.isPwdMatch(password, q.password)) ) {
        throw new ApiError('User/password pair is incorrect',
            401, 'Authentication failed.');
    }
    return q._id;
};

module.exports = {

    loginUser: async (req, res, next) => {
        try {
            const userId = await testUserCred(req.body.email, req.body.password);
            const tokenPair = tknSrv.genTokenPair();
            await authMod.create({...tokenPair, user_id: userId});
            res.status(200).json(`User ${req.body.email} logged in.`);
        } catch (e) {
            next(e);
        }
    },

    renewUserToken: async (req, res, next) => {
        try {
            const rfrToken = req.get('Authorization');
            const tokenPair = tknSrv.genTokenPair();
            const q = await authMod.findOneAndUpdate(
                {rfrToken},
                {...tokenPair},
                {
                    new: true,
                    runValidators: true,
                    lean: true
                }
            ).populate('user_id');
            res.status(200).send(
                {...tokenPair, ...miscSrv.normalizeMngUser(q.user_id)}
            );
            next();
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try{
            const accToken = req.get('Authorization');
            const {user_id: user} = await authMod.findOneAndDelete({accToken}).populate('user_id');
            res.status(200).send(`User ${user.email} logged out`);
        } catch (e) {
            next(e);
        }
    },

    logoutUserAllDev: async (req, res, next) => {
        try{
            const accToken = req.get('Authorization');
            const {user_id: user} = await authMod.findOne({accToken}).populate('user_id');
            await authMod.deleteMany({user_id: user._id});
            res.status(200).send(`User ${user.email} logged out of all devices`);
        } catch (e) {
            next(e);
        }
    }
};

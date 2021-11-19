const authMod = require('../db/auth.model');
const tknSrv = require("../services/token.services");
const authSrv = require('../services/auth.services');

module.exports = {

    loginUser: async (req, res, next) => {
        try {
            const {username, password} = req.body;
            const {user_type} = await authSrv.testUserCred(username, password);
            const tokenPair = tknSrv.genTokenPair({username, user_type});
            await authMod.create({...tokenPair, username});
            res.status(200).json({...tokenPair, username});
        } catch (e) {
            next(e);
        }
    },

    renewUserToken: async (req, res, next) => {
        try {
            const rfrToken = req.get('Authorization');
            const resp = (await authMod.renewTokenPair(rfrToken)).normalize();
            res.status(200).send(resp);
            next();
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try{
            const accToken = req.get('Authorization');
            const {username} = await authMod.findOneAndDelete({accToken});
            res.status(200).send(`User ${username} logged out`);
        } catch (e) {
            next(e);
        }
    },

    logoutUserAllDev: async (req, res, next) => {
        try{
            await authMod.deleteMany({username: req.requestee.username});
            res.status(200).send(`User ${req.requestee.username} logged out of all devices`);
        } catch (e) {
            next(e);
        }
    }
};

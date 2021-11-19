/* eslint-disable no-console */
const authMod = require('./auth.model');
const tknSrv = require("../services/token.services");

module.exports = {
    authCleanOldTokens: async () => {
        const qq = await authMod.find({});
        for (const q of qq) {
            try{
                const {rfrToken} = q;
                tknSrv.verifyToken(rfrToken, TKN.TYPE.REFRESH);
            }catch (e) {
                await authMod.findOneAndDelete({rfrToken});
                console.log(`Old refresh token deleted (${rfrToken})`);
            }
        }
    }

};


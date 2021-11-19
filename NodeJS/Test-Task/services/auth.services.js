const userMod = require("../db/user.model");
const pwdSrv = require("../services/password");
const ApiError = require("../errors/ApiError.class");

module.exports = {

    testUserCred: async (username, password) => {
        const q = await userMod.findOne({username});
        if (!q ||
            !(await pwdSrv.isPwdMatch(password, q.password))) {
            throw new ApiError('Username/password pair is incorrect',
                401, 'Authentication failed.');
        }
        return q;
    }
};

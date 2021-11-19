/* eslint-disable no-console */
const pwdSrv = require("../services/password");
const userMod = require("./user.model");
const miscSrv = require("../services/misc.services");
const ApiError = require("../errors/ApiError.class");

const users = require("./user.db.json");

async function populateDb() {
    for (const user of users) {
        user.password = await pwdSrv.mkHash(user.password);
        let q = (await userMod.create(user)).toObject();
        if (!q) {
            throw new ApiError('User wasn\'t added to DB',
                400, 'Error!');
        } else {
            q = miscSrv.normalizeMngUser(q);
        }
        console.log(JSON.stringify(q,null,' '));
    }
}

module.exports = {
    populateDb
};

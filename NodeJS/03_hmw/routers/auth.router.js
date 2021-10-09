const router = require('express').Router();

const reqDataChk = require('../middleware/authChecks');
const authCtrl = require('./../controllers/auth.controller');

router.post('/auth/user', reqDataChk.fieldsExist, authCtrl.testUserCred);

module.exports = {
    authRouter: router
}
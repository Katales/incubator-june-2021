// eslint-disable-next-line new-cap
const router = require('express').Router();

const chkData = require('../middleware/userChkData.mw');
const chkConsist = require('../middleware/userChkDbConsist.mw');
const userCtrl = require('../controllers/user.controller');
const authMw = require('../middleware/auth.mw');

// Create
router.post('/',
    authMw.chkAccToken,
    chkData.newUser,
    chkConsist.newUser,
    userCtrl.newUser
);
// Retrieve
router.get('/',
    authMw.chkAccToken,
    userCtrl.getUsers
);

router.get('/:username',
    authMw.chkAccToken,
    userCtrl.getUserByUsername
);

// Update
router.put('/:username',
    authMw.chkAccToken,
    chkData.updUserByUsername,
    chkConsist.updUserByUsername,
    userCtrl.updUserByUsername
);

// Delete
router.delete('/:username',
    authMw.chkAccToken,
    userCtrl.delUserByUsername
);

module.exports = {
    userRouter: router
};

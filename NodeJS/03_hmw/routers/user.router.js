const router = require('express').Router();

const checkData = require('../middleware/userChecks.mw');
const userCtrl = require('../controllers/user.controller');

// Create
router.post('/users', checkData.newUser, userCtrl.newUser);
// Retrieve
router.get('/users', userCtrl.getUsers);
router.get('/users/:userId', userCtrl.getUserById);
// Update
router.put('/users/:userId', checkData.updUser, userCtrl.updUserById);
// Delete
router.delete('/users/:userId', userCtrl.delUserById);

module.exports = {
    userRouter: router
}
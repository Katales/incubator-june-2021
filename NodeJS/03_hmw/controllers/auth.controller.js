const userMod = require('../db/user.model');

module.exports = {
    testUserCred: async (req, res) => {
        try {
            const q =  await userMod.findOne({'email': req.body.email});
            if (!q ||
                q.password !== req.body.password)
                throw new Error('User/password pair is incorrect');
            res.json('Authentication is OK');
        } catch (e) {
            res.json(e);
        }
    }
}
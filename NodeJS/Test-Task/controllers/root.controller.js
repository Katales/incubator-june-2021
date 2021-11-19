//todo: update rules
const apiRules = "How to use:</br></br>\n" +
    "(GET)<span>&emsp;</span>/users - get ALL users</br>\n" +
    "(GET)<span>&emsp;</span>/users/:username - get user by username</br>\n" +
    "(POST)<span>&emsp;</span>/users - add new user</br>\n" +
    "(PUT)<span>&emsp;</span>/users/:username - update user by username</br>\n" +
    "(DELETE)<span>&emsp;</span>/users/:username - DELETE user by username</br>\n" +
    "\n" +
    "(POST)<span>&emsp;</span>/login - login user (username/password)</br>\n" +
    "(POST)<span>&emsp;</span>/renew - refresh token pair</br>\n" +
    "(POST)<span>&emsp;</span>/logout - logout user</br>\n" +
    "(POST)<span>&emsp;</span>/logoutall - logout user from all devices</br>\n";

module.exports = {
    getRules: (req, res) => {
        res.send(apiRules);
    }
};

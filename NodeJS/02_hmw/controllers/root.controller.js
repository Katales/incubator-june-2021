
const apiRules = "How to use:</br>" +
    "/clients </br>" +
    "<span>&emsp;</span>  (GET) - get all clients</br>" +
    "/client/_ID_</br>" +
    "<span>&emsp;</span> (GET) - get client by ID</br>" +
    "<span>&emsp;</span>  (POST) - add new client (mandatory fields: 'name', 'account')</br>";


const getRules = (req, res) => {
    res.send(apiRules);
}

module.exports = {
    getRules
}
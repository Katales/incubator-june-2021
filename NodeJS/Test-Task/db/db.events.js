/* eslint-disable no-console */
const userMod = require("./user.model");
const {populateDb} = require('./populate.users');

const {DB_HOST, DB_PORT, DB_NAME} = process.env;

const onConnectDB = async () => {

    console.log(`Connected to MongoDB on URL: mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

    if (!(await userMod.find({})).length) {
        console.log('User collection is empty - gonna fill it up ...');
        populateDb().then(() =>
            console.log('DB has been populated with data from ./user.db.json \n' +
                'default "password" fo all users: wTf01_&4')
        );
    }

};

module.exports = {
    onConnectDB
};

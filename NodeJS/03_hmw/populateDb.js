// const express = require('express');
const mongoose = require('mongoose');

const {MONGO_CONNECT_URL, APP_PORT, userdom} = require('./conf/constants');
const clientMod = require('./db/client.model');
const userMod = require('./db/user.model');
const {client} =require('./db/db.json');

//init
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

populateDb();
doDbTasks();

// app.use('/', clientRouter);
// app.use('/clients', clientRouter);
//
// app.listen(APP_PORT, () => {console.log('NodeJS(express) is listening at http://localhost:5000/')} );

// ============================
async function doDbTasks() {
    let q = await userMod.find({'name': /Gillian/})
    console.log('GOT', q.length, 'RECORDS');
    console.log(q);
}

async function populateDb () {
    await mongoose.connect(MONGO_CONNECT_URL);

    clientMod.collection.drop();
    userMod.collection.drop();

    clientMod.create(client);

    await userMod.create(
        [
            {
                name: 'Mint',
                email: 'auro@well.com',
                password: 'asdfasdfhk',
                userdomain: userdom.RETAIL
            },
            {
                name: 'Xander',
                email: 'xander@gaze.su',
                password: 'wTf01_&4',
                userdomain: userdom.RETAIL
            },
            {
                name: 'Gillian',
                email: 'one.gill@gawk.com',
                password: 'wTf01_&4',
                userdomain: userdom.B2B
            },
            {
                name: 'Gilian',
                email: 'G.Andersen@xmatter.com',
                password: 'qwE12&dj_&4',
                userdomain: userdom.B2B
            }
        ]
    );
}




// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const {rootRouter} = require('./routers/root.router');
const {userRouter} = require('./routers/user.router');
const {authRouter} = require('./routers/auth.router');
const errHandlerMain = require('./errors/error.handler');
const MONGO_CONNECT_URL= `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// init
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(MONGO_CONNECT_URL);

app.use('/', rootRouter, userRouter, authRouter); //todo Rearrange rooters (separate rootR, userR and authR on app level)
// eslint-disable-next-line no-unused-vars
app.use(errHandlerMain);
// (err, req, res, next) => {
//     console.log('<<<<< Custom error >>>>>');
//     for (const fld in err) {
//         console.log(fld, ':', err[fld]);
//     }
//     console.log('+ message:', err.message);
//     console.log('instance of Error:', err instanceof Error);
//     console.log(JSON.stringify(err));
//     console.log(err.toString());
//     res.status(err.status || 500)
//         .json({
//             name: err.name,
//             message: err.message
//         });
//
// });

app.listen(process.env.APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`NodeJS(express) is listening at http://localhost:${process.env.APP_PORT}/`);
});


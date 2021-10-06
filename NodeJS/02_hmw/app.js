//DEPENDENCIES
const path = require('path');
const express = require('express');
const fspw = require('./modules/fs.promise.wrapers');
const clientRouter = require('./routers/client.router')

//init
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/clients', clientRouter);


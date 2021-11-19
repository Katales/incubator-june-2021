const mongoose = require('mongoose');

const cnst = require('../conf/constants');
const miscSrv = require("../services/misc.services");
const {
    NAME_REGEXP,
    USERNAME_REGEXP,
    EMAIL_REGEXP} = require("../conf/constants");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        match: NAME_REGEXP,
        required: true,
    },
    last_name: {
        type: String,
        trim: true,
        match: NAME_REGEXP,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        match: USERNAME_REGEXP,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        match: EMAIL_REGEXP,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true,
        enum: Object.values(cnst.USER_TYPE)
    }
},
{timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}}
);

userSchema.methods = {
    normalize(){
        return miscSrv.rmFields(this.toObject(), [
            'password',
            '__v',
            'id'
        ]);
    }
};

module.exports = mongoose.model('user', userSchema,'user');

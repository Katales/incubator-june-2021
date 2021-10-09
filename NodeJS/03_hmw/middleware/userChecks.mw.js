const userMod = require('./../db/user.model');

// *****  MIDDLEWARE
module.exports = {

    newUser: async (req, res, next) => {
        try {
            if (!allFieldsDefined(req.body)) {
                throw new Error('"name", "email", "password", "userdomain" are mandatory fields!');
            }
            const q = await userMod.findOne({'email': req.body.email});
            if (q) {
                throw new Error('User with this email already exists');
            }
            next();
        } catch (e) {
            res.json(e);
        }
    },

    updUser: async (req, res, next) => {
        try {
            if (!anyFieldDefined(req.body)){
                throw new Error('None of a collection fields was set!');
            }
            const q = await userMod.find({'email': req.body.email});
            if (q.length > 1 ||
                req.params.userId !== q._id)
                throw new Error(`Email ${req.body.email} belongs to another user!`);
            next();
        } catch (e) {
            res.json(e);
        }
    }
}

function allFieldsDefined(rec) {
    let ret = true;
    switch (true) {
        case rec.name === undefined :
            ret &&= false;
        case rec.email === undefined :
            ret &&= false;
        case rec.password === undefined :
            ret &&= false;
        case rec.userdomain === undefined :
            ret &&= false;
    }
    return ret;
}

function anyFieldDefined(rec) {
    let ret = false;
    switch (true) {
        case rec.name !== undefined :
            ret ||= true;
        case rec.email !== undefined :
            ret ||= true;
        case rec.password !== undefined :
            ret ||= true;
        case rec.userdomain !== undefined :
            ret ||= true;
    }
    return ret;
}

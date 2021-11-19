const mongoose = require('mongoose');

const tknSrv = require("../services/token.services");
const miscSrv = require("../services/misc.services");
const {TKN} = require("../conf/constants");

const authSchema = new mongoose.Schema({
    accToken: {
        type: String,
        required: true
    },
    rfrToken: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

authSchema.methods = {
    normalize() {
        return miscSrv.rmFields(this.toObject(), [
            '__v',
            '_id'
        ]);
    }
};

authSchema.statics = {
    // has async action - should be called with AWAIT !
    renewTokenPair(rfrToken) {
        const {username, usertype} = tknSrv.verifyToken(rfrToken, TKN.TYPE.REFRESH) ;
        const tokenPair = tknSrv.genTokenPair({username, usertype});
        return this.findOneAndUpdate(
            {rfrToken},
            {...tokenPair},
            {
                new: true,
                runValidators: true
            }
        );
    },

};
    
module.exports = mongoose.model('auth', authSchema, 'auth');

const clientMod = require('./../db/client.model');

module.exports = {
    getClients: async (req, res) => {
        try {
            res.json(await clientMod.find());
        } catch (e) {
            res.json(e);
        }
    },

    getClientById: async (req, res) => {
        try {
            let resp = await clientMod.findById(req.params.clientId);
            if (!resp) resp = ('Document NOT found ! ID: ' + req.params.clientId);
            res.json(resp);
        } catch (e) {
            res.json(e);
            //
        }
    },

    newClient: async (req, res) => {
        try {
            res.json(await clientMod.create(req.body));
        } catch (e) {
            res.json(e);
        }
    },

    updClientById: async (req, res) => {
        try {
            let resp = await clientMod.findByIdAndUpdate(req.params.clientId, req.body);
            if (!resp) resp = ('Document NOT found ! ID: ' + req.params.clientId);
            res.json(resp);
        } catch (e) {
            res.json(e);
            //res.send('ERROR: no record with ID: '+clientId);
        }
    },

    delClientById: async (req, res) => {
        try {
            let resp = await clientMod.findByIdAndDelete(req.params.clientId);
            if (!resp) resp = ('Document NOT found ! ID: ' + req.params.clientId);
            res.json(resp);
        } catch (e) {
            res.json(e);
            //res.send('ERROR: no record with ID: '+clientId);
        }
    }
}
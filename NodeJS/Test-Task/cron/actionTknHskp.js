/* eslint-disable no-console */
const cron = require("node-cron");
const {authCleanOldTokens} = require('../db/auth.clean-old-tokens');

module.exports =
cron.schedule('0 30 * * * *',
    async () => {
        // eslint-disable-next-line no-console
        console.log('>> (cron task) "oldTokens housekeeping" started >>');
        await authCleanOldTokens();
        console.log('  << "oldTokens housekeeping" finished >>');
    },
    {scheduled: false}
);


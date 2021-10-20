const ApiError = require('./ApiError.class');

// eslint-disable-next-line no-unused-vars
function errHandlerMain(err, req, res, next) {
    console.log('<<<<< Custom error >>>>>');
    for (const fld in err) {
        console.log(fld, ':', err[fld]);
    }
    console.log('+ message:', err.message);
    console.log('+ name:', err.name);

    console.log('instance of Error:', err instanceof Error);
    console.log('instance of ApiError:', err instanceof ApiError);
    console.log(err);
    res.status(err.status || 500)
        .json({
            StatusCode: err.statusCode,
            ErrMessage: err.message
        });
};

module.exports = errHandlerMain;

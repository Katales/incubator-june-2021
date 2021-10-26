require('dotenv').config();
const nodemailer = require('nodemailer');
const emailTemplates = require('email-templates');
const path = require('path');

const mailTmpl = require('./tmpl-email');
const ENV = process.env;

const tmplParser = new emailTemplates({
    views: {
        root: path.join(process.cwd(), 'tmpl-email')
    }
});
const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    // host: process.env.MAIL_SMTP,
    // port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: ENV.MAIL_USER,
        pass: ENV.MAIL_PASS
    }
});

const sendMail = async (mailTo, tmplType) => {
    if (!mailTmpl.TYPE[tmplType]) {
        throw new Error('sendMail: wrong tmplType='+tmplType);
    }
    await mailTransporter.sendMail({
        from: ENV.MAIL_FROM,
        to: mailTo,
        subject: mailTmpl[tmplType].SUBJ,
        html: await tmplParser.render(mailTmpl[tmplType].NAME)
    });
};


// =====> ENTRY POINT

sendMail('Oleksiy.Slisenko@gmail.com', mailTmpl.TYPE.LOGGED_IN).then(() => {
    console.log('Login email sent');
    sendMail('Oleksiy.Slisenko@gmail.com', mailTmpl.TYPE.LOGGED_OUT).then(() => {
        console.log('logout email sent');
        sendMail('Oleksiy.Slisenko@gmail.com', mailTmpl.TYPE.PWD_CHANGE).then(() => {
            console.log('Password change confirmation email sent!');
        });
    });
});

// =====> END OF THE BODY

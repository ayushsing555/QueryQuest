module.exports =  function TransporterFun() {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'queryquest750@gmail.com',
            pass: 'fwvhoxyrzwlpzwrv',
        },
    });
    return transporter;
} 
module.exports =  function TransporterFun() {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'solutionscommunity190@gmail.com',
            pass: 'nxgpbaqimditekvb',
        },
    });
    return transporter;
} 
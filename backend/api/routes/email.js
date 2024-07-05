const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

router.post('/email', (req, res, next) => {
    const {name,email,phoneNo,message}=req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'samiramrullah@gmail.com', 
            pass: process.env.apppassword 
        }
    });
    // Define the email options
    let mailOptions = {
        from: `${name} <${email}>`, // sender address
        to: 'samiramrullah@gmail.com', // list of receivers
        subject: 'Query', // Subject line
        text: message, // plain text body
        html: `<b>${message}</b>` // html body
    };
    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email', error: error.toString() });
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    });
});

module.exports = router;

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://alfredos-iron-work.onrender.com'],
    credentials: true,
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE']

}))
app.post('/submit-inquiry', (req, res) => {
    const {name, email, service, message} = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        secure: true,
        port:465,
        auth: {
            user:process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }  
    })
    const mailOptions = {
        from: 'client@alfredosironwork.com',
        to: 'info@alfredosironwork.com',
        cc: email,
        subject: 'Estimate Inquiry Successfully Submitted',
        text: `The following inquiry was successfully sent. Thank you for your interest! Please allow one to two days for one of our associates to contact you and schedule a visit.\n\nAlfredo's Ironwork\n\n\n\n--------------------------------------------------------------------------\n\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Needed: ${service}\nAdditional Details: ${message}`
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email send: ' + info.response);
            res.send('Email sent successfully')
        }
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
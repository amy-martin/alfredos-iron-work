const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://alfredos-iron-work.onrender.com', "https://alfredosironwork.com"],
    credentials: true,
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE']

}))
app.post('/submit-inquiry', (req, res) => {
    const {name, phone, email, service, additionalDetails} = req.body.formData;
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        secure: true,
        port:465,
        auth: {
            user:process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }  
    })

    const image = '<a href="https://alfredosironwork.com/" style="display:block;width:100px;height:auto;"><img src="https://live.staticflickr.com/65535/53382880900_e021539815_n.jpg" alt="logo" style="display:block;margin:20px 0 20px 0;width:100px;height:auto;"></a>';

    const clientMessage = `<p>Hello ${name},</p><p>Your inquiry was received. Thank you for your interest! Below are the details of your inquiry. Please allow one to two days for one of our associates to contact you and schedule a visit.</p><p>Best regards,<br/>Alfredo's Ironwork</p>`;
  
    const inquiryDetails = `<p><strong>Submitted Inquiry:</strong></p><p>Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}<br/>Service Needed: ${service}<br/>Additional Details: ${additionalDetails}</p>`;
  
    const emailHTML = `${clientMessage}${image}${inquiryDetails}`;
  
    const mailOptions = {
      from: 'client@alfredosironwork.com',
      to: email,
      cc: 'info@alfredosironwork.com',
      subject: `${name} - Estimate Inquiry Successfully Submitted`,
      html: emailHTML,
      text: `Hello ${name},\n\nYour inquiry was received. Thank you for your interest! Below are the details of your inquiry. Please allow one to two days for one of our associates to contact you and schedule a visit.\n\nBest regards,\nAlfredo's Ironwork\n\n\n${'-'.repeat(
        30
      )}\n\n\nSubmitted Inquiry:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Needed: ${service}\nAdditional Details: ${additionalDetails}`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email send: ' + info.response);
            res.status(200).json({message: 'Inquiry successfully sent'})
        }
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
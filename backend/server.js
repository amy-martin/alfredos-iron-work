const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const transporter

require('dotenv').config();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.post('/submit-inquiry', (req, res) => {
    const {name, email, service, message} = req.body
})
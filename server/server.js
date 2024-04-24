const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(cors());
// let word = process.env.HOSTP
// console.log(word) 
app.post('/form-submit', async (req, res) => {
  console.log(req.body);
  
  try {
    const { name, email, message } = req.body;

   
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.HOSTE,
        pass: process.env.HOSTP,
      }
    }); 

    // Compose email
    const mailOptions = {
      from: process.env.HOSTE,
      to: "puigster956@gmail.com",
      // to: "mzqueen711@gmail.com",
      subject: 'New Inquery!',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}); 




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});  
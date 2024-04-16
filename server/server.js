const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(cors());
// Handle form submission
app.post('/form-submit', (req, res) => {
  console.log(req.body);
  // try {
  //   const { name, email, message } = req.body;

    // transporter
    // const transporter = nodemailer.createTransport({
    //   service: 'Gmail',
    //   auth: {
    //     user: 'cheftopdawglvcatering@gmail.com',
    //     pass: '',
    //   },
    // });

//     // Compose email
//     const mailOptions = {
//       from: 'cheftopdawglvcatering@gmail.com',
//       to: 'mzqueen711@gmail.com',
//       subject: 'New Inquery!',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Form submitted successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });





  res.status(200)








});




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
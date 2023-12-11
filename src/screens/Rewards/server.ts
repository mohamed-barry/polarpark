import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP server host
  port: 587, // Replace with your SMTP server port
  secure: false, // True if port is 465, false for other ports
  auth: {
    user: 'your-email@example.com', // Your email
    pass: 'your-password', // Your password
  },
});

app.post('/send-code', (req, res) => {
  const email: string = req.body.email;
  const code: number = Math.floor(1000 + Math.random() * 9000); // Generate random code

  const mailOptions = {
    from: '"momobarry13@gmail.com', // Sender address
    to: email, // List of receivers
    subject: 'Polar Park Email Verification', // Subject line
    text: `Your verification code is: ${code}`, // Plain text body
    // html: `<b>Your verification code is: ${code}</b>`, // HTML body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({message: 'Error sending email', error});
    }
    // For security reasons, in a real application, you should not send the code back.
    res.send({message: 'Email sent successfully'});
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

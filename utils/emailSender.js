const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider (e.g., Outlook, Yahoo, etc.)
    auth: {
      user: 'cymatlin@gmail.com', // replace with your email
      pass: 'slqp tqgk qgrj asln', // replace with your email password or App Password
    },
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'cymatlin@gmail.com', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });

  console.log('Message sent: %s', info.messageId);
}

// Example usage
sendEmail('8300142@gmail.com', 'Hello there!', 'This is a test email.').catch(console.error);

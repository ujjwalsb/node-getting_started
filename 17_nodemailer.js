
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ujjwalsingh15@gmail.com',
        pass: 'YOUR PASSWORD'
    }
});

var mailOptions = {
    from: 'ujjwalsingh15@gmail.com',
    to: 'ujjwalsb23@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email Sent: ' + info.response);
    }
});

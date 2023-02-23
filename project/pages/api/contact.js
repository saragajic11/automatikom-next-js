const Contact = (req, res) => {
    const nodemailer = require("nodemailer");
    const { captchaCode } = req.body;
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "cpanel.autom.mycpanel.rs",
        auth: {
            user: 'noreply@automatikom.rs',
            pass: process.env.NEXT_PUBLIC_PASSWORD,
        },
        secure: false,
        tls: { rejectUnauthorized: false }
    });

    const mailData = {
        from: 'noreply@automatikom.rs',
        to: 'office@automatikom.rs',
        subject: `Kontakt Forma: ${req.body.subject}`,
        text: "Kontakt mail: " + req.body.email + "\n" + "Poruka: " + req.body.message,
    }

    if (!captchaCode) {
        return res.status(422).json({
            message: "Unproccesable request, please provide the required fields",
        })
    } else {
        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                res.send("Error");
            }
            else {
                res.send("Success");
            }
        })
    }
}

export default Contact;
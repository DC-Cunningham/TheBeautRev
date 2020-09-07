// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();

// const port = 4444;
// const config = require("./secrets");

// const emailUsername = config.emailUsername;
// const emailPassword = config.emailPassword;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

// app.listen(port, () => {
//   console.log(`app is live on ${port}`);
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to my api");
// });

// app.post("/api/contact", (req, res) => {
//   var data = req.body;

//   var smtpTransport = nodemailer.createTransport({
//     host: "mail.beautifulrevolution.com.au",
//     port: 465,
//     secure: false,
//     auth: {
//       user: emailUsername,
//       pass: emailPassword,
//     },
//   });

//   var mailOptions = {
//     from: data.email,
//     to: "contact@beautifulrevolution.com.au",
//     subject: `<p>${data.subject}</p>`,
//     html: `<p>${data.name}</p>
//           <p>${data.email}</p>
//           <p>${data.message}</p>`,
//   };

//   smtpTransport.sendMail(mailOptions, (error, response) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send("Success");
//     }
//     smtpTransport.close();
//   });
// });

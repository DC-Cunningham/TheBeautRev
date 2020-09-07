// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const path = require("path");

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Define middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// const config = require("./utils/secrets");
// const emailUsername = config.emailUsername;
// const emailPassword = config.emailPassword;

// // Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
// }

// // Define API routes here
// app.post("/api/contact", (req, res) => {
//   var data = req.body;

//   var smtpTransport = nodemailer.createTransport({
//     host: "mail.beautifulrevolution.com.au",
//     port: 465,
//     secure: true,
//     auth: {
//       user: emailUsername,
//       pass: emailPassword,
//     },
//   });

//   var mailOptions = {
//     from: data.email,
//     to: "dc@beautifulrevolution.com.au",
//     subject: data.subject,
//     html: `<h3>Message from The Beautiful Revolution Contact page</h3>
//            <p>From: ${data.name}</p>
//            <p>At: ${data.email}</p>
//            <p>Message: ${data.message}</p>`,
//   };
//   if (data.email && data.message && data.name) {
//     smtpTransport.sendMail(mailOptions, (error, response) => {
//       if (error) {
//         res.status(400).send(error);
//       } else {
//         res.send("Success");
//       }
//       smtpTransport.close();
//     });
//   } else {
//     res.status(403).send("Please complete all required Fields");
//   }
// });

// // Send every other request to the React app

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

const config = require("./utils/secrets");
const emailUsername = config.emailUsername;
const emailPassword = config.emailPassword;

// // Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "client/build"));
}

app.post("/api/contact", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    host: "mail.beautifulrevolution.com.au",
    port: 465,
    secure: true,
    auth: {
      user: emailUsername,
      pass: emailPassword,
    },
  });

  var mailOptions = {
    from: data.email,
    to: "dc@beautifulrevolution.com.au",
    subject: data.subject,
    html: `<h3>Message from The Beautiful Revolution Contact page</h3>
           <p>From: ${data.name}</p>
           <p>At: ${data.email}</p>
           <p>Message: ${data.message}</p>`,
  };
  if (data.email && data.message && data.name) {
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.send("Success");
      }
      smtpTransport.close();
    });
  } else {
    res.status(403).send("Please complete all required Fields");
  }
});
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join("client/build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

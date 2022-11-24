const express = require("express");
const app = express();
const PORT = 8080;

const emailjs = require("emailjs");

app.use( express.json() );

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

app.get("/test", (req, res) => {
  res.status(200).send({
    test: "test"
  })
});

app.post("/sendMail", (req, res) => {
  const { name, email, subject, message } = req.body;

  res.status(200).send({ message: "succes" })
});


function sendEmail(params) {
  emailjs.send()
}
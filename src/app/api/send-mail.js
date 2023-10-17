import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

const MESSAGE_TEMPLATE = (first_name, last_name, message) => `
    <p>
        Greetings, <br /><br />

        ${message}, <br /><br />

        Sincerely, <br />
        ${first_name + " " + last_name} 
    </p>`;

export default function handler(req, res) {
  const { subject, sender, receiver, first_name, last_name, message } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAILER,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: sender,
    to: receiver,
    subject: subject,
    html: MESSAGE_TEMPLATE(first_name, last_name, message),
  };

  return { hello: "world" };

  if (req.method === "POST") {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        throw new Error(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    });
  }
}

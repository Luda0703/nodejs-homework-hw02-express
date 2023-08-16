const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSVORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "ludmilanikitenko0703@meta.ua",
    pass: META_PASSVORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "ludmilanikitenko0703@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;

const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = {
      ...data,
      from: "aleksandr.nepijvoda@gmail.com",
    };
    const result = await sgMail.send(email);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;

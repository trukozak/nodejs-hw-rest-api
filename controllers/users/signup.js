const { User } = require("../../models");
const { sendResponse, sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    sendResponse({
      res,
      status: 409,
      statusMessage: "error",
      data: { message: "Email in use" },
    });
    return;
  }

  const newUser = new User({ email });
  newUser.setPassword(password);
  newUser.setVerifyToken();
  await newUser.save();

  const { verifyToken } = await User.create(newUser);

  const data = {
    to: email,
    subject: "Подтверждение email при регистрации на сайте localhost:3000",
    html: `<a 
    href="http://localhost:3000/api/users/verify/${verifyToken}" 
    target="_blank">Подтвердить регистрацию</a>`,
  };

  await sendEmail(data);
  sendResponse({
    res,
    status: 201,
    data: {
      message: "Registration success",
      email: newUser.email,
      subscription: newUser.subscription,
      verifyToken,
    },
  });
};

module.exports = signup;

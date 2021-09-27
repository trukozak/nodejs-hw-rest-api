const { Contact } = require("../../models");
const { sendResponse } = require("../../helpers");

const add = async (req, res) => {
  const newContact = { ...req.body, owner: req.user._id };
  const result = await Contact.create(newContact).populate(
    "owner",
    "_id email"
  );

  sendResponse({ res, data: { result }, status: 201 });
};

module.exports = add;

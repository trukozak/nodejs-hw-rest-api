const { Contact } = require("../../models/contact");
const { sendResponse } = require("../../helpers");
const { NotFound } = require("http-errors");

const updateStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  if (!favorite) {
    throw new NotFound("missing field favorite");
  }

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );

  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found!`);
  }

  sendResponse({
    res,
    data: {
      result,
      message: "Status updated",
    },
  });
};

module.exports = updateStatus;

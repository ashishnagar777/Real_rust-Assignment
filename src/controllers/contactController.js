const Contact = require("../model/contact");

exports.addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const response = await newContact.save();
    console.log("Thank you for your message!");
    res.status(201).json({ message: "Thank you for your message!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
};
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

const Client = require("../model/client");

exports.getClients = async (req, res) => {
  try {
    const data = await Client.findOne();
    console.log("Clients find successfully");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

exports.addClient = async (req, res) => {
  try {
    const newCilent = new Client(req.body);
    const response = await newCilent.save();
    res.status(200).json(response);
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
};

exports.updateClient = async (req, res) => {
   try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(client);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
};

exports.deleteClient = async (req, res) => {
   try {
      await Client.findByIdAndDelete(req.params.id);
      res.json({ message: 'Client deleted' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
};


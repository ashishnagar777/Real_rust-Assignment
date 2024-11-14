const nLetter = require("../model/Newsletter");

exports.addSubscription = async (req, res) => {
  try {
    const data = req.body;
    const newLetter = new nLetter(data);
    const response = await newLetter.save();
    console.log("Congrats, you have new Subscribers");
    res.satuts(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error." });
  }
};
exports.getSubscriptions = async (req, res) => {
    try {
      const subscriptions = await nLetter.find();
      console.log(subscriptions);
      res.status(200).json(subscriptions);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server Error." });
    }
  };


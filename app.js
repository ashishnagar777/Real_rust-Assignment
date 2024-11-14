const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const contactRoutes = require('./src/routes/contactRoutes')
const clientRoutes = require('./src/routes/clientRoutes')
const newsletterRoutes = require('./src/routes/newsletterRoutes')
const projectRoutes = require('./src/routes/projectRoutes')

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.DB_Url ;

// Connect to MongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


// Middleware to parse request body
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use('/api/clients', clientRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

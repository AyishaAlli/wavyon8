const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
const port = 8000;
dbConnect();

// allows frontend users to access endpoints with no errors
// #### DO MORE RESEARCH ON THIS ####

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to this application." });
  next();
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// Emails
app.use("/submit-email", emailRoutes);

//Clothing items

module.exports = app;

const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Please provide an email"] },
});

module.exports = mongoose.model.Emails || mongoose.model("Emails", EmailSchema);
const Email = require("../models/emailModel");



async function submitEmailAddress(req, res) {
  const email = new Email({
    email: request.body.email,
  });
  email
    .save()
    .then((result) => {
      response.status(201).send({
        message: "Email Created Successfully",
        result,
      });
    })
    // catch error if the new email wasn't added successfully to the database
    .catch((error) => {
      response.status(500).send({
        message: "Error creating email",
        error,
      });
    });
}

module.exports = { submitEmailAddress };
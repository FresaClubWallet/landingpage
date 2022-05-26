const Contact = require("../models/contact.model.js");
const api_helper = require("../helpers/api_helper");

// Create and Save a contact
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    if (!req.body["g-recaptcha-response"]) {
      return res.status(400).send({
        message: "You are robot!"
      });
    }
    var VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body['g-recaptcha-response']}`;

    api_helper.make_API_call(VERIFY_URL)
    .then(response => {
      if(!response.success){
        return res.status(400).send({
          message: "You are robot!"
        });
      }
    // Create a contact
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });

    if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
      return res.status(400).send({
        message: "Name, email, subject, message can not be empty!"
      });
    }
  
    // Save contact in the database
    Contact.create(contact, (err, data) => {
      console.log(data)
      if (err)
        return res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Contact."
        });
      else return res.send(data);
    });
    })
  };

  
const Contact = require("../models/contact.model.js");
const api_helper = require("../helpers/api_helper");
const {validationResult} = require('express-validator');

// Create and Save a contact
exports.create = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).jsonp(errors.array()[0]);
  } else {
      var VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body['g-recaptcha-response']}`;

      api_helper.make_API_call(VERIFY_URL)
      .then(response => {
        if(!response.success){
          return res.status(400).send({
            msg: "You are robot!"
          });
        }
      // Create a contact
      const contact = new Contact({
          name: req.body.name,
          email: req.body.email,
          subject: req.body.subject,
          message: req.body.message,
      });
    
      // Save contact in the database
      Contact.create(contact, (err, data) => {
        console.log(data)
        if (err)
          return res.status(500).send({
            msg:
              err.msg || "Some error occurred while creating the Contact."
          });
        else return res.send(data);
      });
      })
    }
  };

  
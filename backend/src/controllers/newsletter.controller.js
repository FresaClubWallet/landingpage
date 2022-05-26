const Newsletter = require("../models/newsletter.model.js");
const api_helper = require("../helpers/api_helper");

// Create and Save a newseltter
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
      // Create a newseltter
      const newseltter = new Newsletter({
          email: req.body.email,
      });

      if (!req.body.email) {
        return res.status(400).send({
          message: "Email can not be empty!"
        });
      }
    
      // Save newseltter in the database
      Newsletter.create(newseltter, (err, data) => {
        console.log(data)
        if (err)
          return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Newsletter."
          });
        else return res.send(data);
      });
    })
    .catch(error => {
        return res.send(error)
    })

  };

  
const Newsletter = require("../models/newsletter.model.js");
const api_helper = require("../helpers/api_helper");
const {validationResult} = require('express-validator');

// Create and Save a newseltter
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

        // Create a newseltter
        const newseltter = new Newsletter({
          email: req.body.email,
        });
      
        // Save newseltter in the database
        Newsletter.create(newseltter, (err, data) => {
          if (err)
            return res.status(500).send({
              msg:
                err.msg || "Some error occurred while creating the Newsletter."
            });
          else return res.send(data);
        });
      })
      .catch(error => {
          return res.send(error)
      })
    }

  };

  
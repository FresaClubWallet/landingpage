const connection = require("../config/mysql.config.js");

// constructor
const Contact = function(contact) {
    this.name = contact.name;
    this.email = contact.email;
    this.subject = contact.subject;
    this.message = contact.message;

  };

  Contact.create = (contact, result) => {
    connection.query("INSERT INTO contact SET ?", contact, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result({ msg: "Can't send message!" }, null);
          return;
        }
    
        console.log("created contact: ", { id: res.insertId, ...contact });
        result(null, { msg: "success" });
      });
};

module.exports = Contact;

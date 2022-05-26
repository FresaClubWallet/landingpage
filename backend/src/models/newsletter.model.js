const connection = require("../config/mysql.config.js");

// constructor
const Newsletter = function(newsletter) {
    this.email = newsletter.email;
  };

Newsletter.create = (newsletter, result) => {
    connection.query("INSERT INTO newsletter SET ?", newsletter, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result("error", null);
          return;
        }
    
        console.log("created newsletter: ", { id: res.insertId, ...newsletter });
        result(null, { message: "success" });
      });
};

module.exports = Newsletter;

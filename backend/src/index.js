import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
const compression = require('compression')

const api_helper = require("./helpers/api_helper");

const app = express();
const fs = require('fs');
const http = require('http');
const https = require('https');

dotenv.config();

// enable CORS using npm package
var cors = require('cors');
app.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true
  }),
  compression()
);

// include router
const newsletterRouter = require("./routes/newsletter.routes")
const contactRouter = require("./routes/contact.routes")

// routing
app.use("/api/newsletter", newsletterRouter)
app.use("/api/contact", contactRouter)


// verify reCAPTCHA response
app.post('/api/verify', (req, res) => {
  var VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body['g-recaptcha-response']}`;
  api_helper.make_API_call(VERIFY_URL)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
});
const FRONTEND_BUILD_PATH = path.join(__dirname, "../../frontend/build");

//  Route for frontend
app.use(express.static(FRONTEND_BUILD_PATH, {
  maxage: '86400000' // in milliseconds - 1 day
}));
// Server React frontend
app.get('*', function(req, res) {
  res.sendFile(path.join(FRONTEND_BUILD_PATH , "index.html"));
});

// Certificate
const credentials = {
  key: fs.readFileSync('./ssl/privatekey.pem', 'utf-8'),
  cert: fs.readFileSync('./ssl/fullchain.pem', 'utf-8')
};

// Starting both http & https servers
const httpsServer = https.createServer(credentials, app);
// Redirect from http port to https
const httpServer = http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'].replace(80,443) + req.url });
  console.log("http request, will go to >> ");
  console.log("https://" + req.headers['host'].replace(80, 443) + req.url );
  res.end();
});

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});

export default app;

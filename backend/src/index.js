import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const fs = require('fs');
const http = require('http');
const https = require('https');
const logger = require('morgan');
const FileStreamRotator = require('file-stream-rotator')
const expressStaticGzip = require("express-static-gzip");

const FRONTEND_BUILD_PATH = path.join(__dirname, "../../frontend/build");
const LOG_PATH = path.join(__dirname, "../logs");

// ensure log directory exists
fs.existsSync(LOG_PATH) || fs.mkdirSync(LOG_PATH)

// create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(LOG_PATH, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})

const accessParameterStream = () => {

  const date = new Date();

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2,'0');
  const dd = String(date.getDate()).padStart(2,'0');

  return path.join(LOG_PATH, `parameter-${yyyy}${mm}${dd}.log`);
}

const setNoCache = (res) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  res.setHeader("Expires", date.toUTCString());
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Cache-Control", "public, no-cache");
}

const setLongTermCache = (res) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  res.setHeader("Expires", date.toUTCString());
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
}

// enable CORS using npm package
var cors = require('cors');
app.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true
  })
);

// setup the logger
app.use(logger('combined', {stream: accessLogStream}))

// include router
const newsletterRouter = require("./routes/newsletter.routes")
const contactRouter = require("./routes/contact.routes")

const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 4,
  message: {'msg': 'You are too fast, please wait and try again later!'}
});

// routing
app.use("/api/newsletter", apiLimiter, newsletterRouter)
app.use("/api/contact", apiLimiter, contactRouter)

//  Route for frontend
app.use(expressStaticGzip(FRONTEND_BUILD_PATH, {
  enableBrotli: true,
  orderPreference: ["br", "gz"],
  setHeaders(res, path) {
    setLongTermCache(res)
  }
}));

app.use((req,res,next) => {
  if (req.hostname.includes(process.env.DOMAIN)) 
    next();
  else
    res.status(403).end(`Forbidden.`);
});

// Server React frontend
app.get('*', function(req, res) {
  setNoCache(res);
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
const httpServer = http.createServer(function (request, response) {
  try {
    const { rawHeaders, httpVersion, method, socket } = request;
    const { remoteAddress, remoteFamily } = socket;
    
    var time = new Date,
    dformat = [time.getMonth()+1,
              time.getDate(),
              time.getFullYear()].join('/')+' '+
              [time.getHours(),
                time.getMinutes(),
                time.getSeconds()].join(':');

    
    response.writeHead(301, { "Location": "https://" + request.headers['host'].replace(80,443) + request.url });
    console.log("http request, will go to >> ");
    console.log("https://" + request.headers['host'].replace(80, 443) + request.url );
    var fullUrl = request.headers['host'] + request.url

    fs.appendFileSync(accessParameterStream(),
      JSON.stringify({
        time,
        rawHeaders,
        httpVersion,
        method,
        remoteAddress,
        remoteFamily,
        fullUrl,
      }) + "\n")

    let body = [];
    request.on("data", chunk => {
      body.push(chunk);
    });
    request.on("end", () => {
      body = Buffer.concat(body);
      body = body.toString();
      fs.appendFileSync(accessParameterStream(), "Body: " +body + "\n")
    });
    request.on("error", error => {
      errorMessage = error.message;
    });

    response.end();
  } catch (e) {
    // statements to handle any exceptions
    response.end();
    console.log(e)
  }
});

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});

export default app;
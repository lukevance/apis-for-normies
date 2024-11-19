require('dotenv').config();
var express = require('express');
var axios = require('axios');
var path = require('path');
var app = express();

const accessId = process.env.ACCESS_ID;
const accessKey = process.env.ACCESS_KEY;
const merchantId = process.env.MERCHANT_ID;
const baseURL = process.env.API_BASE_URL;
const userId = process.env.USER_ID;

const TransactionsClient = require('./db');
const transactionsClient = new TransactionsClient(baseURL, userId);

// set the view engine to ejs
app.set('view engine', 'ejs');

// use JSON to parse payloads
app.use(express.json()); // Add this line to parse JSON payloads

// Use URL-encoded middleware to parse incoming URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Make environment variables available to all templates
app.use((req, res, next) => {
  res.locals.accessId = accessId;
  res.locals.merchantId = merchantId;
  next();
});


// ---------- Ignore everything above this line ---------------



// index page
app.get('/', function(req, res) {
  
  var tagline = "Welcome to Acme Co. where we'll do anything to get your business!";

  res.render('pages/main', {
    tagline: tagline,
    message: req.query.message || null
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// Webhook listener route
app.post('/webhook-listener', (req, res) => {
  try {
    console.log('Webhook received:', req.body);
    res.status(200).send('Webhook received successfully!');
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('An error occurred while processing the webhook.');
  }
});

app.listen(8080);
console.log('Server is listening on port 8080');

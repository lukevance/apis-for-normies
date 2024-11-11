require('dotenv').config();
var express = require('express');
var axios = require('axios');
var path = require('path');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use JSON to parse payloads
app.use(express.json()); // Add this line to parse JSON payloads

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  
  var tagline = "If you're reading this, it should be! Just to double check, submit the form below.";

  res.render('pages/main', {
    tagline: tagline,
    message: req.query.message || null
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// Form submission route
app.post('/webhook-form', async (req, res) => {
  const { userId, ngrokUrl, time } = req.body;

  if (!userId || !ngrokUrl || !time) {
    return res.status(400).send('All fields are required.');
  }

  const apiUrl = `${process.env.API_BASE_URL}/user/${userId}/webhook`;

  try {
    const response = await axios.post(apiUrl, {
      ngrokUrl: `${ngrokUrl}/webhook-listener`,
      delaySeconds: parseInt(time),
    });

    if (response.status === 200) {
      res.redirect(`/?message=Webhook scheduled for ${time} seconds!`);
    } else {
      res.status(500).send('Failed to schedule webhook. Please try again.');
    }
  } catch (error) {
    console.error('Error scheduling webhook:', error.message);
    res.status(500).send('An error occurred while scheduling the webhook.');
  }
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

const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const hostname = '0.0.0.0'; // Bind to all IP addresses
const port = 80; // HTTPS default port

const app = express();
app.use(cors());

// Add middleware to check Host header
app.use((req, res, next) => {
  if (req.headers.host === 'omegafield.lk') {
    next();
  } else {
    res.status(403).send('Unauthorized');
  }
});

app.use(express.static(path.join(__dirname, 'tes/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'tes/build', 'index.html'));
});

app.get('/get', (req, res) => {
    res.send('Hello World');
});

const options = {
    key: fs.readFileSync('cert/server.key'),
    cert: fs.readFileSync('cert/server.cert')
};

// const server = https.createServer(options, app);

app.listen(port, hostname, () => {
    console.log(`Server is running on HTTPS protocol at https://${hostname}:${port}`);
});
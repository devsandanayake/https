const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const port = 8081; // HTTPS default port

const app = express();
app.use(cors());   

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

app.listen(port,() => {
    console.log(`Server is running on HTTPS protocol`);
});

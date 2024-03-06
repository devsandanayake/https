const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

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

https.createServer(options, app).listen(8081, () => {
    console.log('Server is running on HTTPS protocol on port 3000');
});


//with oy ssl
// app.listen(8081, () => {
//     console.log('Server is running on HTTPS protocol on port 3000');
// });


//openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 its use parphase  paraphrase: '1234',

//openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.cert -days 365
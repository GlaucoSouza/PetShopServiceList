const http = require('http'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
dotenv = require("dotenv");
dotenv.config();

var app = express();
var port = 8000;

app.use(express.static(path.join(__dirname, "view")));
app.get('/', (req, res) => {
    res.render('index')
})

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));







// // ----------------
// var http = require('http');
// var fs = require('fs');
// //2.
// var server = http.createServer(function (req, resp) {
//     //3.
//     if (req.url === "/create") {
//         fs.readFile("index.html", function (error, pgResp) {
//             if (error) {
//                 resp.writeHead(404);
//                 resp.write('Contents you are looking are Not Found');
//             } else {
//                 resp.writeHead(200, { 'Content-Type': 'text/html' });
//                 resp.write(pgResp);
//             }
             
//             resp.end();
//         });
//     } else {
//         //4.
//         resp.writeHead(200, { 'Content-Type': 'text/html' });
//         resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
//         resp.end();
//     }
// });
// //5.
// server.listen(5050);
 
// console.log('Server Started listening on 5050');
// // ----------------
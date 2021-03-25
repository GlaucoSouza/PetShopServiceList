const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

let users = []; // names of users will be stored here
(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people/");
    console.log(data)
    users = data.results.map(user=>user.name);
    console.log(users);
    } catch(error){
    console.log(error)
  }
})()
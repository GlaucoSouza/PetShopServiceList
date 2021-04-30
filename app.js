const http = require('http')
const logger = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs')
const methodOverride = require('method-override')
const Registration = require('./models/register')
const dotenv = require("dotenv")
dotenv.config()
var app = express()

//set views
app.set('views', __dirname + '/views')
app.set("view engine", "ejs");

//parsing the data to json
app.use(bodyParser.urlencoded({extended: true}))

//route 
const listRoute = require('./routes')

app.use((req, res, next) => {
       res.locals.path = req.path
       next()
})


//it tells where my files are, in the views folder
app.use(express.static('views'));
app.use(methodOverride('_omethod'))
app.use(express.urlencoded({ extended: false})) 



app.get('', (req, res) =>{
    res.render('index')
})

//render the pettable file to the page /pettable
app.get('/pettable', async (req, res)=>{
    const registration = await Registration.find();
    //renders the table to the page
    res.render('pettable', {registration: registration})
})

//listen the port number 8000
app.listen(8000, ()=>{
    console.log("server is running on port 8000");
})

//my db credentials are in a .env file stored with the name of dbURI
const dbURI = process.env.DB_URL;

//db connection using the dbURI credentials
mongoose.connect(dbURI, {useNewUrlParser: true}, {useUnifiedTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

app.use('routes', listRoute)

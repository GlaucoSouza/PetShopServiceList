const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Registration = require('./models/register')
const listRoute = require('./routes/services')
const dotenv = require("dotenv")
dotenv.config()
var app = express()


//set views
// app.set('views', __dirname + '/views')
app.set("view engine", "ejs");

//parsing the data to json
app.use(bodyParser.urlencoded({extended: true}))

//it tells where my files are, in the views folder
app.use(express.static('views'));

//in order to delete, I have this here to tell my program when to delete, as it only works with GET/POST
//And I'm passing the string _method which will allow to call the router.delete
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false})) 

//renders the index.ejs file on the endpoint /
app.get('/', (req, res) =>{
    res.render('index')
})


//POST method sends the schema filled with the inserted information by the user
app.post("/", (req, res, next)=>{
    let newRegister = new Registration({
        service: req.body.service,
        petname: req.body.petname,
        animaltype: req.body.animaltype,
        ownername: req.body.ownername,
        email: req.body.email
    })
    newRegister.save((err, newRegister)=>{
        if (err){
            return next(err)
        }
    })
    res.redirect('/')
})


//render the pettable file to the page /pettable
app.get('/pettable', async (req, res)=>{
    const registration = await Registration.find();
    //renders the table to the page
    res.render('pettable', {registration: registration})
})

app.use('/pettable', listRoute)



var port = process.env.PORT || 8000;

//listen the port number 8000 if localhost
//but Heroku chooses the port
app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

//my db credentials are in Heroku stored into the config vars with the name of dbURI
const dbURI = process.env.DB_URL;

//db connection using the dbURI credentials
mongoose.connect(dbURI,  {
    useUnifiedTopology: true
}, {
    useNewUrlParser: true
})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

app.use('routes', listRoute)

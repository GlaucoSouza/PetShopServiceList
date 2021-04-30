const http = require('http'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
ejs = require('ejs'),
dotenv = require("dotenv");
dotenv.config();
var app = express();

// app.use(require('./routes'));

app.use(bodyParser.urlencoded({extended: true}))

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

//set views
app.set('views', __dirname + '/views')
app.set("view engine", "ejs");

app.get('', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html')
})

// app.get('/pettable', (req,res)=>{
//     res.render('pettable', {})
// })

    //creation of the registration schema
var registrationSchema = new mongoose.Schema({
    service: String,
    petname: String,
    animaltype: String,
    ownername: String,
    email: { type: String, unique: true, lowercase: true},
})

var serviceList = mongoose.model("pet_shop_service_list", registrationSchema)

//POST method sends the schema filled with the inserted information by the user
app.post("/", (req, res, next)=>{
    let newRegister = new serviceList({
        service: req.body.service,
        petname: req.body.petname,
        animaltype: req.body.animaltype,
        gender: req.body.gender,
        ownername: req.body.ownername,
        email: req.body.email
    })
    newRegister.save((err, newRegister)=>{
        if (err){
            return next(err)
        }
        // res.json(201,newRegister)
    })
    res.redirect('/')
})

app.get('/pettable', (req, res)=>{
    serviceList.find({}, function(err, services){
        if(err) res.json(err)
        res.render('pettable', {
            servicesList : services
        })

    })
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
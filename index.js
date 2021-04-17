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

//my db credentials are in a .env file stored with the name of dbURI
const dbURI = process.env.DB_URL;
app.use(bodyParser.urlencoded({extended: true}))



    //creation of the registration schema
const registrationSchema = {
    petname: String,
    animaltype: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    ownername: String,
    email: { type: String, unique: true, lowercase: true},
}

const Registration = mongoose.model("Registration", registrationSchema)

// app.use(express.static(path.join(__dirname, "view")));
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

// app.get('/', (req, res) => {
//     res.render('/index')
// })

// app.use(bodyParser.json());
// app.use(logger('tiny'));
// app.use(require('./routes'));

app.post("/", (req, res)=>{
    let newRegistration = new Registration({
        petname: req.body.petname,
        animaltype: req.body.animaltype,
        gender: req.body.gender,
        ownername: req.body.ownername,
        phone: req.body.phone
    })
    newRegistration.save()
    res.redirect('/')
})

//db connection
mongoose.connect(dbURI, {useNewUrlParser: true}, {useUnifiedTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

app.listen(8000, ()=>{
    console.log("server is running on port 5050");
})
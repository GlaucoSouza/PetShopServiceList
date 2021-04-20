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

// app.use(require('./routes'));
// const mainRoutes = require('./routes.js')
// app.use(mainRoutes)


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "/")));
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

// app.use(logger('tiny')); 


    //creation of the registration schema
const registrationSchema = {
    service: String,
    petname: String,
    animaltype: String,
    ownername: String,
    email: { type: String, unique: true, lowercase: true},
}

const Register = mongoose.model("Register", registrationSchema)

app.post("/", (req, res)=>{
    let newRegister = new Register({
        service: req.body.service,
        petname: req.body.petname,
        animaltype: req.body.animaltype,
        gender: req.body.gender,
        ownername: req.body.ownername,
        email: req.body.email
    })
    newRegister.save()
    res.redirect('/')
})

app.listen(8000, ()=>{
    console.log("server is running on port 8000");
})

//my db credentials are in a .env file stored with the name of dbURI
const dbURI = process.env.DB_URL;

//db connection using the dbURI credentials
mongoose.connect(dbURI, {useNewUrlParser: true}, {useUnifiedTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));
const express = require('express');
const hbs = require('express-handlebars');
const adminrouter = require('./router/adminrouter');
const mongoose = require('mongoose');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();


app.engine('hbs', hbs({extname:"hbs",
defaultLayout:__dirname + "/views/layouts/main",
partialsDir: __dirname + "/views/parsials"
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));



app.use(bodyParser.urlencoded({ extended: false }));



app.use("/admin", adminrouter);

const DATABASEURL = "mongodb://admin:admin123@ds127938.mlab.com:27938/doctorai_admin"
mongoose.connect(DATABASEURL, {
    useNewUrlParser: true
}, (err)=> {
    if(err){
        console.log('fiald connect to the database');

    }else {
        console.log('connect to the database');
    }
});

const PORT = 5000;

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    
    }else{
        console.log("Server is running on PORT :- " + PORT);
    }
})

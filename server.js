const express = require('express');
const hbs = require('express-handlebars');
const homeRouter = require('./routers/homeRouter');
const userRouter = require('./routers/userRouter');
const servicesRouter = require('./routers/servicesRouter');
const dashBordRouter = require('./routers/dashBordRouter');
const mongoose = require('mongoose');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();


app.engine('hbs', hbs({extname:"hbs",
defaultLayout:__dirname + "/views/layouts/main",
partialsDir: __dirname + "/views/parsials"
}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'public')));







app.use("/", homeRouter);
app.use("/user", userRouter);
app.use("/services", servicesRouter);
app.use("/dashbord", dashBordRouter);


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

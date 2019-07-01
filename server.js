const express = require('express');
const hbs = require('express-handlebars');
const adminrouter = require('./router/adminrouter');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();


app.engine('hbs', hbs({extname:"hbs",
defaultLayout:__dirname + "/views/layouts/main",
partialsDir: __dirname + "/views/parsials"
}));
app.set('view engine', 'hbs');

app.use('/static', express.static(path.join(__dirname, 'public')));



app.use(bodyParser.urlencoded({ extended: false }));



app.use("/admin", adminrouter);

const PORT = 5000;

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    
    }else{
        console.log("Server is running on PORT :- " + PORT);
    }
})

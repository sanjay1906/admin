const express = require('express');
const router = express.Router();
const User = require("../model/User");
router.get('/',(req,res,next)=> {
    res.render('home');
})

router.post('/',(req, res, next) => {
        const user = new User ({
        Diseases: req.body.Diseases,
        Summary: req.body.Summary,
        Causes: req.body.Causes,
        Medicines: req.body.Medicines,
        Netural: req.body.Netural
        })
        
        user.save((err) =>{
            if(err){
                console.log('data faild edded in database')
            }
            else{
                res.redirect('/admin')
            }
        })
        
})


module.exports = router;
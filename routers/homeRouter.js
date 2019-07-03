const express = require('express');
const router = express.Router();
const MalariaDatails = require('../model/MalariaDatails')
router.get('/',(req,res,next)=> {
    MalariaDatails.find()
     .then((result) => {
         res.render('home',{data:result})
     }).catch((err) => {
         console.log(err)
     });
})

 
 
module.exports = router;
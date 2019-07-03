const express = require('express');
const router = express.Router();
const MalariaDatails = require('../model/MalariaDatails');

router.get('/',(req,res,next)=> {
    res.render('services');
})

router.post("/",(req,res,next)=>{
    
    const user = new MalariaDatails({
        Disease: req.body.Disease,
        Summary: req.body.Summary,
        Causes: req.body.Causes,
        Medicines:req.body.Medicines,
        Netural: req.body.Netural,
     
})

  user.save((err)=>{
      if(err){
          console.log('faild to data add')
      }
      else{
          res.redirect('/services')
      }
      })
    })


module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/login',(req,res,next)=> {
    res.render('login');
})
router.get('/signup',(req,res,next)=> {
    res.render('signup');
})
  
module.exports = router;
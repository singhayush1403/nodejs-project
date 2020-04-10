const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin'); 


router.get('/',(req,res,next)=>{
   // console.log(adminData.products);
    //console.log('In MAIN middleware');
   const products=adminData.products;

    res.render('shop',{prods:products,pageTitle:'Shop'});
    });

    module.exports=router;
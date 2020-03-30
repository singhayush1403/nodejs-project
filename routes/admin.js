const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const path = require('path');

const products = [];

router.get('/add-product', (req, res, next) => {
     console.log('In another middleware');
     res.render('add-product',{pageTitle:'AddProduct'});
   });

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');

});

exports.routes = router;
exports.products=products;
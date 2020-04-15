const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('./admin/add-product', {
        pageTitle: 'AddProduct',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}
  

exports.getProducts = (req, res, next) => {
    // console.log(adminData.products);
    //console.log('In MAIN middleware');
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path:'/'
        });
    });
}
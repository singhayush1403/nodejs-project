const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const path = require('path');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const Product = require('./models/product')
const User = require('./models/user')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    User.findByPk(1).then(user=>{
        req.user = user;
        next();
    }).catch()
})
app.use('/admin', adminRoutes);

app.use(userRoutes);

app.use(errorController.get404Page);

Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
})
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsToMany(Product,{through:CartItem});
Product.belongsToMany(Cart,{through:CartItem});
sequelize.sync().then(result => {
    return User.findByPk(1);
    //  console.log(result)

}).then(user => {
    if (user===null) {
        return User.create({
            name: 'Ayush',
            email: 'singhayush1403@gmail.com'
        });
    }
    return user;
}).then(user => {
  return   user.createCart();
  //  console.log(user)
   
}).then(cart=>{
    app.listen(3000)
}).catch(err => {
    console.log(err)
});
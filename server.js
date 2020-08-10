const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
const path = require('path');
// const adminRoutes = require('./routes/admin');
// const userRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const mongoConnect = require('./util/database');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    // User.findByPk(1).then(user=>{
    //     req.user = user;
    //     next();
    // }).catch()
})
// app.use('/admin', adminRoutes);

// app.use(userRoutes);

app.use(errorController.get404Page);
mongoConnect(()=>{
    //console.log(client);
    app.listen(3000);
});

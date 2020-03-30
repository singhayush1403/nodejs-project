const express=require('express');
const bodyParser = require('body-parser');
const app=express();
app.set('view engine','pug');
app.set('views','views');
const path = require('path');
const adminData = require('./routes/admin');
const userRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);

app.use(userRoutes);

app.use((req,res,next)=>{
    
    res.status(404).render('not-found');
});
app.listen(3000);   
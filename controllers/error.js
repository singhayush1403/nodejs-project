exports.get404Page = (req,res,next)=>{
    
    res.status(404).render('not-found',{pageTitle:'Page Not Found',path:"404"});
}
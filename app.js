const express=require( 'express');
const app=express();
const path=require('path');
 // const ejs=require('ejs');
const pug =require('pug');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/sandy',(req,res)=>{ res.status(200).render('portfolio.pug', {
  title: 'Sandip Portfolio',
})
});



module.exports=app;
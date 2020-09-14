/*jshint esversion: 6 */
const express= require('express');



 const app=express();
 



 
app.listen(process.env.PORT || 3000);



app.set('view engine', 'ejs');






app.use(express.static('public'));

app.get('/', (reg,res)=>{
  res.render('index',{title:'Home'});
});
app.get('/work', (reg,res)=>{
  res.render('work', {title:'work'});
});
app.get('/contact', (reg,res)=>{
  res.render('contact', {title:'Contact'});
});

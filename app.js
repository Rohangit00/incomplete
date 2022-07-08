const express=require('express');

let data=[{'item': 'buy groceries'}, {'item': 'water plants'}, {'item':'iron clothes'}];
const app=express();
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static('./public'));
app.get('/todo',(req,res)=>
{
  res.render('todo',{todos: data});
});
app.post('/todo',(req,res)=>
{
    data.push(req.body);
    res.redirect('/todo');
});
app.delete('/todo',(req,res)=>
{
    data.pop();
    res.redirect('/todo');
})
app.listen(3000);
console.log('You are listening to port 3000');
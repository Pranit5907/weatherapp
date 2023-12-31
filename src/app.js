const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');
const hbs = require('hbs');

const static_path = (path.join(__dirname,"../public/js"));
const template_path = (path.join(__dirname,"../templates/views"));
// const partial_path = (path.join(__dirname,"../templates/partials"));

app.set('view engine', 'hbs');
app.set('views',template_path);
// hbs.registerPartial(partial_path);

app.use(express.static(static_path));


app.get("",(req,res)=>{
    res.render("index")
});
app.get("/home",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{ 
    res.render("about")
});
app.get("/weather",(req,res)=>{
    res.render("weather")
});
app.get("*",(req,res)=>{
    res.render("404error")
});

app.listen(port,()=>{
    console.log(`listening on ${port}`);
 });
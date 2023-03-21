var express = require('express')
var app = express();
var path = require('path')
var hbs = require('hbs');
var staticPath = path.join(__dirname,'../public')
const templatePath =path.join(__dirname,'../templates/views')
const partials_path = path.join(__dirname,'../templates/partials');
app.set('view engine', 'hbs');
app.set('views', templatePath);
 app.use(express.static(staticPath))
hbs.registerPartials(partials_path);

//routing
app.get("/",(req,res)=>{
    res.render("index.hbs")
  });

  app.get("/about",(req,res)=>{
    res.render("about.hbs")
  });

  app.get("/weather",(req,res)=>{
    res.render("weather.hbs")
  });

  app.get("*",(req,res)=>{
    res.render("404.hbs",{
      errorMsg:"Oops! page not found"
    })
  });

  app.listen(8000,()=>{
    console.log("Listensing at port 8000")
});

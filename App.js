const express = require ('express');
const fs = require('fs');
const App = express();
const port = 80;

App.get("/",(req,res)=>{
    res.send('index.html')
});
App.get("/services",(req,res)=>{
    res.send('services.html')
});
App.get("/contact",(req,res)=>{
    res.send('contact.html')
});
App.get("/about",(req,res)=>{
    res.send('about.html')
});


App.listen(port,()=>{
    console.log('started successfully...')
});



console.log("smit chuahan is great programer:")
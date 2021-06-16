//jshint esversion:6
const express = require("express");
const https = require("https");
// const bodyParser = require("body-parser");

 const app = express();
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
   const query = req.body.cityName;
   const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=14450fe5cdc9e21ab689147f6d83aebe&units=metric";
   https.get(url,function(response){
       console.log(response.statusCode);
       response.on("data",function(data){
           const wD=JSON.parse(data);
           const temp = wD.main.temp;
           const wDes =  wD.main.temp_max;
           const icon =  
          res.write("<p>the weather is currently"+wDes+"</p>");
          res.send("<h1>temperature in"+ query +" is"+temp+"degress celcious</h1>");
           res.send()
          
   
       })
   
   });
    
} )




app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});
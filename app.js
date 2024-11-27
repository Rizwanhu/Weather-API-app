const amp = require("express");
const express = amp();
// help us to see and help in post request of the form that we recieve through website
const bodyparser = require("body-parser");
// to attach the api we will include it
const https = require("https"); 
require('dotenv').config();

// .use keyword to enable post request getting from html form input
express.use(bodyparser.urlencoded({extended:true}))

// to redirect the html to the port
express.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
})

// post request after getting the from data
// used for html forms
express.post("/", function(req,res){
  // console.log(req.body.city);


  let apikey = process.env.API_KEY;
  const inputcity = req.body.city;
  const units = "metric";
    const api = "https://api.openweathermap.org/data/2.5/weather?appid="+apikey+"&q="+inputcity+"&units="+units;
    https.get(api , function(RESPONSE){
      // the api gives the response and we console it
        console.log(RESPONSE.statusCode);

        // the data of the response is sent
        RESPONSE.on("data", function(data){
          // gives the response in json format
          // by default it consloes the data in hexa format
          const wethy = JSON.parse(data);
          console.log(wethy);

          // ***
          const detail1 =(wethy.weather[0].description);
          const detail2 =(wethy.weather[0]);
          const detail3 =(wethy.weather[0].main);



          const temp = wethy.main.temp;
          // console.log(temp);
          // 1.
          // res.send("<h1>The tempurature in pakistan lahore is "+ temp +" Degrees and its <br> "+detail1+" today!</h1>");

          // 2.
          // *to use multiple send we will use .write method it will gather all and then send it to final .send function that will send all the .write* 
          res.write("<h1>The tempurature in "+inputcity+" is "+ temp +" Degrees</h1>");
          res.write("<p>its <br> "+detail1+" today!</p>");
          let icon1 = wethy.weather[0].icon;
          let icon = "https://openweathermap.org/img/wn/"+icon1+"@2x.png";
          res.write(" <img src="+icon+"> ");
          res.send();
          // we can only send one send request in all code

        })

      })

})



















// express.get("/",function(req,res){
//     // res.send("it is running");   

//     const api = "https://api.openweathermap.org/data/2.5/weather?appid=b4d4a5006f5ef6e2c1f71fdff52fea77&q=Lahore&units=metric";
//     https.get(api , function(RESPONSE){
//       // the api gives the response and we console it
//         console.log(RESPONSE.statusCode);

//         // the data of the response is sent
//         RESPONSE.on("data", function(data){
//           // gives the response in json format
//           // by default it consloes the data in hexa format
//           const wethy = JSON.parse(data);
//           console.log(wethy);

//           // ***
//           const detail1 =(wethy.weather[0].description);
//           const detail2 =(wethy.weather[0]);
//           const detail3 =(wethy.weather[0].main);



//           const temp = wethy.main.temp;
//           // console.log(temp);
//           // 1.
//           // res.send("<h1>The tempurature in pakistan lahore is "+ temp +" Degrees and its <br> "+detail1+" today!</h1>");

//           // 2.
//           // *to use multiple send we will use .write method it will gather all and then send it to final .send function that will send all the .write* 
//           res.write("<h1>The tempurature in pakistan lahore is "+ temp +" Degrees</h1>");
//           res.write("<p>its <br> "+detail1+" today!</p>");
//           let icon1 = wethy.weather[0].icon;
//           let icon = "https://openweathermap.org/img/wn/"+icon1+"@2x.png";
//           res.write(" <img src="+icon+"> ");
//           res.send();
//           // we can only send one send request in all code

//         })
//       });

//       // last send request as always in main get function
//       // res.send("server is up and running");
 
// // JSON.stringify
// }); 

express.listen(3000,function(){
    console.log("Server is listening on port 3000");
});














/*

const express = require("express"); // Import Express for creating the app

const app = express(); // Create an Express app instance

const https = require("https"); // Import the https module for making HTTPS requests

app.get("/", function (req, res) {
  res.send("It is running!"); // Send a response to the root path

  const apiKey = "YOUR_OPEN_WEATHER_MAP_API_KEY"; // Replace with your actual API key
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=Lahore&units=metric`;

  https.get(weatherApiUrl, (response) => {
    let weatherData = "";

    response.on("data", (chunk) => {
      weatherData += chunk; // Accumulate incoming data chunks
    });

    response.on("end", () => {
      try {
        const parsedData = JSON.parse(weatherData); // Parse the received JSON data
        console.log("Weather data:", parsedData); // Log the parsed weather data
      } catch (error) {
        console.error("Error parsing weather data:", error); // Handle potential parsing errors
      }
    });
  });
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
*/
const express = require("express");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");
const { url } = require("inspector");
const { json } = require("express/lib/response");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// weather API---------------------------------------------------------------------------------------

app.post("/", (req, res) => {
  const query = req.body.cityName;
  console.log(query);

  const appKey = "fc5260af02cad34522496cf441281ac9";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appKey + "&units=" + units;

  console.log(url);
  https.get(url, (response) => {
    response.on("data", (data) => {
      const myData = JSON.parse(data);
      var temp = myData.main.temp;
      var weather = myData.weather[0].description;
      var icon = myData.weather[0].icon;

      var imgURL = ('http://openweathermap.org/img/wn/' + icon + '@2x.png');
  });
});
});

app.listen(3000, function () {
  console.log("the server is running on port 3000");
});


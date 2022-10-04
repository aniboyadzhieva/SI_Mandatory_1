var express = require('express');
const cors = require("cors");
var csv = require('csvtojson');
const xml2js = require('xml2js');
yaml = require('js-yaml');
var app = express();
var fs = require("fs");

const PORT = process.env.PORT || 8081;

const options = {
   definition: {
      openapi: "3.0.0",
      info: {
         title: "DateTime API",
         version: "1.0.0",
         description: "Express API",
      },
      servers: [
         {
            url: "http://localhost:8081",
         },
      ],
   },
   apis: ["./*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors()); app.use(cors());

app.get('/json', function (req, res) {
   fs.readFile("./dog.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
})

app.get('/csv', function (req, res) {
   csv()
      .fromFile("./dog.csv")
      .then(function (jsonArrayObj) {
         console.log(jsonArrayObj);
         res.end(JSON.stringify(jsonArrayObj));
      });
})

app.get('/xml', function (req, res) {
   fs.readFile("./dog.xml", 'utf8', function (err, data) {
      console.log(data);
      xml2js.parseString(data, function (err, result) {
         console.log(JSON.stringify(result));
         res.end(JSON.stringify(result));
      });
   });
})

app.get('/yaml', function (req, res) {
   fs.readFile("./dog.yaml", 'utf8', function (err, data) {
      console.log(data);
      res.end(JSON.stringify(yaml.load(data), null, 2));
   });
})

app.get('/txt', function (req, res) {
   fs.readFile("./dog.txt", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
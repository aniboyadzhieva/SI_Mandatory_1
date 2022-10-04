const express = require("express");
const router = express.Router();
const axios = require("axios");
const URL = "http://127.0.0.1:8080/timestamp";

router.get("/", (req, res) => {
  time = Date.now().toString();
  console.log(time);
  res.end(time);
});

router.get("/python", async (req, res, next) => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    res.send(response.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

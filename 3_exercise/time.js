const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  time = Date.now().toString();
  console.log(time);
  res.end(time);
});

module.exports = router;

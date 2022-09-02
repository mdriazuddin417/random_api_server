const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("First Route check");
});

module.exports = router;

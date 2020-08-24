const express = require("express");
const router = express.Router();

const GamesToSell = require("../models/gamesToSell");

router.post("/offer", (req, res, next) => {
  const { price, childrenPlatform, id, user } = req.body;
  GamesToSell.create({ price, childrenPlatform, id, user })
    .then((response) => {
      console.log(response);
      res.status(200);
    })
    .catch(
      (err) => console.log("Error while creating an offer", err),
      res.status(500)
    );
});

router.get("/offer", (req, res, next) => {
  GamesToSell.find({})
    .populate("user")
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

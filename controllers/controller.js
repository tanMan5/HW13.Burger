const express = require("express");
const router = express.Router();

// Import the burger.js from the models folder
//This allows us to use the database functions.
const burger = require("../models/burger.js");

//Creating the routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});
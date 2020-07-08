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

router.post("/api/burgers", function(req, res) {
    burger.create(["burgerName"], [req.body.burgerName], function(result) {
        res.json({ id: result.insertId });
    });
  });
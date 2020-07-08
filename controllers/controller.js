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

  router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    burger.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;
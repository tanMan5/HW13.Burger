//Import ORM from the config folder
//This will create functions to interact with the SQL database
const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
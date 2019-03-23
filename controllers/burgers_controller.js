var express = require("express");

var router = express.Router();

// Import the models
var db = require('../models');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burgers.findAll({} ).then(function(response){
    var hbsObject = { burgers: response};
    // cust name query
    console.log(hbsObject)
		res.render('index', hbsObject);
		}).catch(function(err){
			console.log(err);
  });
});

router.get("/api/customers", function(req, res) {
  db.Customers.findAll({}).then(function(response){
    //console.log(response)
    var hbsObject2 = { customers: response};
    res.json(hbsObject2);
    }).catch(function(err){
      console.log(err);
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burgers.create({
    burger_name:req.body.burger_name
  }).then(function(response){
    console.log("added burger");
    res.json(response);
  }).catch(function(err){
    console.log(err);
  });
});

router.put("/api/burgers/", function(req, res) {
  db.Burgers.update({
    devoured:req.body.devoured,
    CustomerId:req.body.CustomerId
  },{
    where:{
      id:req.body.id
    }
  }).then(function(response){
    res.json(response);
  }).catch(function(err){
    console.log(err);
  });
});

router.post("/api/customers", function(req, res) {
  db.Customers.create({
    customer_name:req.body.customer_name
  }).then(function(response){
    console.log("added customer");
    res.json(response);
  }).catch(function(err){
    console.log(err);
  });
});



// Export routes for server.js to use.
module.exports = router;

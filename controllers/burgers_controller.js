// Import Express and our burger module
var express = require("express");
var burger = require("../models/burgers.js");

// Establish a router for our app
var router = express.Router();

// Get all the entries
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObj = {
            burgers: data
        };

        res.render("index", hbsObj);
    });
});

// Add a new entry
router.post("/api/burgers", (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

// Update an entry
router.get("/api/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        res.render("single-entry", result)
    });
});

// Export our routes for the app
module.exports = router;
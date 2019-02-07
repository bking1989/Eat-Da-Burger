// Import Express and our burger module
var express = require("express");
var burger = require("../models/burgers.js");

// Establish a router for our app
var router = express.Router();

// GET path
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObj = {
            burgers: data
        };
        
        res.render("index", hbsObj);
    });
});

// POST path
router.post("/api/burgers", (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.params.burger_name, req.params.devoured], (result) => {
        res.json({ id: res.insertId });
    });
});

// PUT path
router.put("/", (req, res) => {});

// DELETE path
router.delete("/", (req, res) => {});

// Export our routes for the app
module.exports = router;
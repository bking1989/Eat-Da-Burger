// Import Express and our burger module
var express = require("express");
var burger = require("../models/burgers.js");

// Establish a router for our app
var router = express.Router();

// GET for all database entries
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObj = {
            burgers: data
        };

        res.render("index", hbsObj);
    });
});

// POST route for new entry
router.post("/api/burgers", (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

// GET route for update page
router.get("/api/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        res.render("single-entry", result[0])
    });
});

// PUT route for update
router.put("/api/burgers/:id", function (req, res) {
    burger.newBurger([req.body.updateName, req.body.updateDev, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).end();
        } else if (result.changedRows === 0) {
            return res.status(404).end();
        }

        res.status(200).end();
        history.go(-1);
    });
});

// Export our routes for the app
module.exports = router;
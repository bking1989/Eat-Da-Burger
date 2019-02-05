var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

// GET route
router.get("/", (req, res) => {
    burgers.all((data) => {
        var hbsObj = {
            model: data
        };

        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

// POST route
router.post("/api/burgers", (res, req) => {
    burgers.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devour
    ], (result) => {
        res.json({ id: result.insertId });
    });
});

// PUT route
router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
});

module.exports = router;
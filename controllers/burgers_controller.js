// Import Express and our burger module
var express = require("express");
var burger = require("../models/burgers.js");

// Establish a router for our app
var router = express.Router();

// GET path
router.get("/", (req, res) => {});

// POST path
router.post("/", (req, res) => {});

// PUT path
router.put("/", (req, res) => {});

// DELETE path
router.delete("/", (req, res) => {});

// Export our routes for the app
module.exports = router;
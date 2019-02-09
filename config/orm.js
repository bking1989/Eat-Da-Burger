// Import connection module
var connection = require("../config/connection.js");

// Our ORM functions
var orm = {
    selectAll: (table, cb) => {
        var queryString = `SELECT * FROM ${table};`;

        connection.query(queryString, (error, results) => {
            if (error){
                console.error("Connection Error: " + error.stack);
            }

            cb(results);
        });
    },

    insertOne: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") VALUES(?, ?);";

        connection.query(queryString, vals, (err, result) => {
            if (err){
                console.error("Connection Error: " + err.stack);
            }

            cb(result);
        });
    },

    updateOne: (table, id, cb) => {
        var queryString = "SELECT * FROM " + table;
        queryString += " WHERE id = ?";

        connection.query(queryString, id, (err, result) => {
            if (err){
                throw err
            }

            cb(result);
        });
    },

    newBurger: (table, values, cb) => {
        var queryString = "UPDATE " + table + " SET burger_name = ?, devoured = ? WHERE id = ?;"

        connection.query(queryString, values, (err, result) => {
            if (err){
                throw err
            }

            cb(result);
        });
    }
};

// Export ORM function as module
module.exports = orm;
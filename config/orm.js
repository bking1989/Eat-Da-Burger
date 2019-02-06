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

    insertOne: (table, [valOne, valTwo], [burgerName, devoured], cb) => {
        var queryString = `INSERT INTO ${table}(${valOne}, ${valTwo}) VALUES(${burgerName}, ${devoured});`

        connection.query(queryString, (error, results) => {
            if (error){
                console.error("Connection Error: " + error.stack);
            }

            cb(results);
        });
    },
    updateOne: () => {}
};

// Export ORM function as module
module.exports = orm;
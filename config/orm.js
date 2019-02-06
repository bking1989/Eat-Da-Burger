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
    insertOne: () => {},
    updateOne: () => {}
};

// Export ORM function as module
module.exports = orm;
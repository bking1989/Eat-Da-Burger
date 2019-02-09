// Set up MySQL connection
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "brad5740",
        database: "burgers_db"
    });
};

// Establish said connection
connection.connect((err) => {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as ID " + connection.threadId);
});

// Export connection as module for ORM
module.exports = connection;
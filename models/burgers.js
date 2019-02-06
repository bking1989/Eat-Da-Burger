// Import our ORM
var orm = require("../config/orm.js");

// Define our burger function's methods
var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (cb) => {
        orm.insertOne('burgers', ['burger_name, devoured'], (res) => {
            cb(res);
        });
    },
    updateOne: () => {},
};

// Export our burger module
module.exports = burger;
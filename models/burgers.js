// Import our ORM
var orm = require("../config/orm.js");

// Define our burger function's methods
var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    updateOne: (id, cb) => {
        orm.updateOne('burgers', id, (res) => {
            cb(res);
        });
    },
};

// Export our burger module
module.exports = burger;
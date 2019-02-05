var orm = require("../config/orm.js");

var burger = {
    create: () => {
        orm.insertOne();
    },

    update: () => {
        orm.updateOne();
    },

    select: () => {
        orm.selectAll();
    },
};

module.exports = burger;
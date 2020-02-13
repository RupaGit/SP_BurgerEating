var orm = require("../config/orm.js");


var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (tableName, burgerName, devouredVal,cb) {
        orm.insertOne(tableName, burgerName, devouredVal, function (res) {
            cb(res);
        });
    },
    update: function (tableName, updatedBurgerName, updatedDevouredVal, id, cb) {
        orm.updateOne(tableName, updatedBurgerName, updatedDevouredVal, id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;



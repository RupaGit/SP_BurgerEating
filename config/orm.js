var connection = require("./connection.js");



var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (tableName, burgerName, devouredVal,cb) {
        console.log(burgerName);
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
        // queryString +="(burger_name, devoured) VALUES ("+burgerName +","+devouredVal+")";
        connection.query(queryString,[tableName, burgerName, devouredVal], function (err, res) {
            if (err) throw err;
            cb(res); 
        });
    },
    updateOne: function (tableName, updatedBurger, updatedDevoured, id,cb) {
        console.log(updatedBurger);
        var queryString = "UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ?";
        connection.query(queryString, [tableName,updatedBurger, updatedDevoured, id], function (err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    }
}

module.exports = orm;
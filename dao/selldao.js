/**
 * Created by miracle on 16-11-12.
 */
var mysql = require('mysql');
var conf = require('../config/db');
var seller = require('./sell');
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
module.exports = {
    insert: function (name, price, color, siez, num, src) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(seller.insert,[name, price, color, siez, num, src],function (error, rows, flied) {
            console.log('insert new goods');
        })
    }

}
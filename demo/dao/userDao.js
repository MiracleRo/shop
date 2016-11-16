/**
 * Created by miracle on 16-11-4.
 */
var mysql = require('mysql');
var conf = require('../config/db');
var sql = require('./userSqlMapping');
var jsonWrite = function (res,ret) {
    if(typeof ret ==='undefined'){
        res.json({
           code:'1',
            msg:'操作失败'
        });
    } else {
        res.json(ret);
    }
};
module.exports ={
    add: function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.queryAll,function (error,rows,flied) {
            res.send(rows);
        })
    }
}
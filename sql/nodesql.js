/**
 * Created by miracle on 16-10-31.
 */
var sqlite3= require('sqlite3');
//console.log(sqlite3);

var db = new sqlite3.Database('sqlite3.db');
db.run('CREATE TABLE IF NOT EXISTS NOTE (cdate TEXT PRIMARY KEY,contnet TEXT)');
//db.run("insert into NOTE (cdate,contnet) values ('12','dss') ");
db.each('select * from NOTE',[],function (err,row) {
    console.log(row.cdate);
});
db.close();
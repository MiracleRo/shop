/**
 * Created by miracle on 16-11-15.
 */
var car= {
    insert:'insert into car (goodname ,price ,color ,siez ,num ,src,name) values (?,?,?,?,?,?,?)',
    update:'update goods set UserPass =? where UserName = ?',
    delete:'delete from car',
    queryAll:'select * from car',
};
module.exports = car;
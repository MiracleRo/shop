/**
 * Created by miracle on 16-11-12.
 */
var sell = {
    insert:'insert into goods (GoodName ,price ,color ,siez ,num ,src) values (?,?,?,?,?,?)',
    update:'update goods set UserPass =? where UserName = ?',
    delete:'delete from goods where UserName =? and UserPass = ?',
};
module.exports = sell;
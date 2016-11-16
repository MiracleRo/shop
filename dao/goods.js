/**
 * Created by miracle on 16-11-14.
 */
var goods = {
    insert:'insert into user (UserName ,UserPass) values (?,?)',
    update:'update user set UserPass =? where UserName = ?',
    delete:'delete from user where UserName =? and UserPass = ?',
    queryById:'select * from goods where GoodName like "%"?"%"',
    queryAll:'select * from goods',
    log:'select * from user where UserName=? and UserPass = ?'
};
module.exports = goods;
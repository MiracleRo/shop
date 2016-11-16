/**
 * Created by miracle on 16-11-10.
 */
var user = {
    insert:'insert into user (UserName ,UserPass) values (?,?)',
    update:'update user set UserPass =? where UserName = ?',
    delete:'delete from user where UserName =? and UserPass = ?',
    queryById:'select * from user where UserName=?',
    queryAll:'select * from user',
    log:'select * from user where UserName=? and UserPass = ?'
};
module.exports = user;
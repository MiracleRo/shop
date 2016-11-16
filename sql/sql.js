/**
 * Created by miracle on 16-10-30.
 */
var db = openDatabase('mybd','1.0','Test DB',2*1024*1024);
var read =document.getElementById('read');
var write = document.getElementById('write');
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1,"菜鸟教程")');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2,"www.runnoob.com")');
});
db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
        var len = results.rows.length, i;
        msg = "<p>查询记录条数: "+ len + "</p>";
        document.getElementById('status').innerHTML += msg;
        for (i=0; i<len ;i++){
            console.log(results.rows.item(i).log);
            console.log(results.rows.item(i).id);
        }
    },null);
});
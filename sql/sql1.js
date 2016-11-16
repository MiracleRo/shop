/**
 * Created by miracle on 16-10-31.
 */
var db = openDatabase('mybd1','1.0','Test DB',2*1024*1024);
var  insert1=  document.getElementById('insert1');
var  delete1=  document.getElementById('delete1');
var  update1=  document.getElementById('update1');
var  select1=  document.getElementById('select1');
var id = document.getElementById('id');
var log = document.getElementById('log');
var det = document.getElementById('delete2');
var upda =document.getElementById('upd');
var upid =document.getElementById('updid');
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOG (id unique, log)');
    tx.executeSql('INSERT INTO LOG (id, log) VALUES (1,"菜鸟教程")');
    tx.executeSql('INSERT INTO LOG (id, log) VALUES (2,"www.runnoob.com")');
});
insert1.onclick=function () {
    db.transaction(function (tx) {
        var cmd = 'INSERT INTO LOG (id, log) VALUES ('+id.value+',"'+log.value+'")';
        tx.executeSql(cmd);
    });
}
delete1.onclick = function () {
    db.transaction(function (tx) {
        var del = "delete from log where id ="+det.value;
      //  tx.executeSql('delete from log where id =1');
        tx.executeSql(del);
    });
}
update1.onclick = function () {
    db.transaction(function (tx) {
        var logs = 'update log set log ="'+upda.value+'" where id ='+upid.value;
        tx.executeSql(logs);
    })
}
select1.onclick = function () {
    document.getElementById('status').innerHTML = '';
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM LOG', [], function (tx, results) {
            var len = results.rows.length, i;

            for (i=0; i<len ;i++){
            //    console.log(results.rows.item(i).log);
              //  console.log(results.rows.item(i).id);
                document.getElementById('status').innerHTML += 'id:'+results.rows.item(i).id+'    log:'+results.rows.item(i).log+'</br>';
            }
        },null);
    })
}
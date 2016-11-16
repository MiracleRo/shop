/**
 * Created by miracle on 16-11-1.
 */
var indexdBD = window.indexedDB;
console.log(indexdBD);
var request = indexdBD.open('mydb',3.0);
request.onerror = function () {
    console.log('indexedDB on error');
}
request.onsuccess= function (event) {
    console.log(event);
     db = event.target.result;
    console.log(db);
}
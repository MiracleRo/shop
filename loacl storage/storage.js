/**
 * Created by miracle on 16-10-27.
 */
// if(typeof(Storage)!=='undefined'){
//         console.log('支持');
// }else {
//         console.log('不支持');
// }
(function () {
    var name =document.getElementById('name');
    var psw = document.getElementById('psw');
    var save = document.getElementById('save');
    var read = document.getElementById('read');
    save.onclick = function () {
  // localStorage.name = name.value;
  // localStorage.psw = psw.value;
  // localStorage.setItem('name',name.value);
       localStorage.setItem('name',name.value);
        localStorage.setItem('psw',psw.value);
        name.value='';
        psw.value='';

    }
    read.onclick = function () {
       var uname =  localStorage.getItem('name');
        var upsw = localStorage.getItem('psw');
        console.log('uname:'+uname);
        console.log('upsw:'+upsw);
    }
})();

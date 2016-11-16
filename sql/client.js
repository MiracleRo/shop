/**
 * Created by miracle on 16-10-21.
 */
var usrName = document.getElementById('un');
var usrPwd = document.getElementById('up');
var log =document.getElementById('log');
var sign = document.getElementById('sign');
log.onclick = function () {
    var xml = new XMLHttpRequest();
    xml.open('POST','http://127.0.0.1:8080',true);
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send("userName="+usrName.value+"&passWord="+usrPwd.value);
    xml.onreadystatechange = function () {
        if (xml.readyState==4&&xml.status==200){
            var w = JSON.parse(xml.responseText);
            if (w.res==true){
                alert('登录成功！');
            }else {
                alert('登录失败！');
            }
        }
    }
}
sign.onclick =function () {
    var xml = new XMLHttpRequest();
    xml.open('POST','http://127.0.0.1:8080',true);
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send("userName="+usrName.value+"&passWord="+usrPwd.value);
    xml.onreadystatechange = function () {
        if (xml.readyState==4&&xml.status==200){
            var w = JSON.parse(xml.responseText);
            if (w.res==true){
                alert('登录成功！');
            }else {
                alert('登录失败！');
            }
        }
    }
}
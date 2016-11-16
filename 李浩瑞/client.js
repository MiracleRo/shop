/**
 * Created by miracle on 16-10-21.
 */
var log =document.getElementById('log');
log.onclick = function () {
    var usrName = document.getElementById('un').value;
    var usrPwd = document.getElementById('up').value;
    var xml = new XMLHttpRequest();
    xml.open('POST','http://127.0.0.1:8080',true);
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send("userName="+usrName+"&passWord="+usrPwd);
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
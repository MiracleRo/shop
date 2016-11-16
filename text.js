/**
 * Created by Administrator on 2016/10/17 0017.
 */

 var xhr = new XMLHttpRequest();
 var url='http://127.0.0.1:8080';
 //var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
 xhr.open('POST', url, true);
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xhr.send("type=add&num=1&num1=3");

 xhr.onreadystatechange = function () {
 if (xhr.readyState == 4 && xhr.status == 200) {
 var w = JSON.parse(xhr.responseText);
 console.log(JSON.stringify(xhr.responseText));
 console.log(w);
// console.log(w.query.results.channel.lastBuildDate);
 //  console.log(JSON.stringify(w));
 }
 }

/*
 var sites = [
 { "name":"runoob" , "url":"www.runoob.com" },
 { "name":"google" , "url":"www.google.com" },
 { "name":"微博" , "url":"www.weibo.com" }
 ];
 console.log(sites[0].name);
 var str ={"name":"runoob" , "url":"www.runoob.com"}
 var str_pretty1 = JSON.stringify(str);
 console.log(str);
 console.log(str_pretty1);*/
/*function loadXMLDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "ajax_info.js", true);
    xmlhttp.send();
}*/

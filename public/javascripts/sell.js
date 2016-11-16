/**
 * Created by miracle on 16-11-12.
 */
var url = "http://127.0.0.1:3000/insert";
var submit = document.getElementById('submit');
var good_name = document.getElementById('good_name');
var good_cost = document.getElementById('good_cost');
var good_img = document.getElementById('good_img');
var good_color = document.getElementById('good_color');
var good_size = document.getElementById('good_size');
var good_num = document.getElementById('good_num');
// function sendCmd(type, cb) {
//     var u = url+type;
//     $.post(u, {
//         type: type,
//         username: username.value,
//         password: password.value
//     }, function (data, status) {
//         console.log(data);
//         cb(data);
//     });
// }
submit.onclick= function () {
    var file = good_img.value;
    var fileName = getFileName(file);

    function getFileName(o){
        var pos=o.lastIndexOf("\\");
        return o.substring(pos+1);
    }
    $.post(url,{
        name:good_name.value,
        price:good_cost.value,
        color:good_color.value,
        siez:good_size.value,
        num:good_num.value,
        src:'./images/'+fileName
    },function (data,status) {
        console.log(data);
    })
}

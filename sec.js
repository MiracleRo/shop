/**
 * Created by miracle on 16-10-20.
 */
// var url ="http://127.0.0.1:8080?num=32&num1=13&type=add"
// personObj=new Object();
// personObj.firstname="John";
// personObj.lastname="Doe";
// personObj.age=50;
// personObj.eyecolor="blue";
$("#get").click(function(){

    $.get(url,function(data,status){
        console.log(data);
        console.log(status);
    });
//     $("#get_json").click(function () {
//         $.getJSON(url,'nihao',function (result) {
//             console.log(result);
//         });
//     });
//     // $("#get_srpt").click(function () {
//     //     $.getScript('demo_ajax_script.js');
//     // });
//     $("#param").click(function () {
//         console.log($.param(personObj));
//     });
//     $('#post').click(function () {
//         $.post('http://127.0.0.1:8080',{
//             type:'add',
//                 num:2,
//             num1:4
//         },function (data,status) {
//             console.log(data);
//             console.log(status);
//         })
//      })
//     $(document).ajaxStart(function () {
//         console.log('ajax start');
//     })
// });
var n1 =$('#inp1');
var n2 = $('#inp2');
var type = $('#type');
var url = 'http://127.0.0.1:8080?';
// $('#post').click (function () {
//     var n1 =$('#inp1');
//     var n2 = $('#inp2');
//     var type = $('#type');
//     // var p = 'type='+type.val()+"$num="+n1.value()+'&num1='+num1.val();
//     $.post('http://127.0.0.1:8080',{
//         type :type.val(),
//         num :n1.val(),
//         num1:n2.val()
//     },function (data,status) {
//         console.log(data);
//     })
//
// })
    // var url ="http://127.0.0.1:8080?num=32&num1=13&type=add"
var  url ="http://127.0.0.1:8080?"
var type = $('#type');
var num = $('#inp1');
var num1 = $('#inp2');
$('#get').click(function () {
    var p =url+"num="+num.val()+"&num1="+num1.val()+"&type="+type.val();
    $.get(p,function (data,status) {
        console.log(data);
        console.log(status);
    })
})
// $('#show').click(function () {
//     var p =url+"num="+num.val()+"&num1="+num1.val()+"&type="+type.val();
//     $.get(p,function (data,status) {
//        $('#re').append('type:'+data.type+'<br/>'+'fruit:'+data.fruit+'<br/>'+'num:'+data.num+'<br/>'+'num1:'+data.num1);
//     })
// })
$('#post').click (function () {
    var n1 =$('#inp1');
    var n2 = $('#inp2');
    var type = $('#type');
    // var p = 'type='+type.val()+"$num="+n1.value()+'&num1='+num1.val();
    $.post('http://127.0.0.1:8080',{
        type :type.val(),
        num :n1.val(),
        num1:n2.val()
    },function (data,status) {

    })

})

/**
 * Created by miracle on 16-10-21.
 */
$('#add').click (function () {
    var n1 =$('#inp1');
    var n2 = $('#inp2');
    var type = $('#type1');
    // var p = 'type='+type.val()+"$num="+n1.value()+'&num1='+num1.val();
    $.post('http://12.0.0.1:8080',{
        type :type.val(),
        num :n1.val(),
        num1:n2.val()
    },function (data,status) {
        if(data.fruit>0){
            for (var i = 0;i<data.fruit;i++){
                addButton();
            }
        }else if (data.fruit<0) {
            var length = $('.new').length;
            var fruit = Math.abs(data.fruit);
            if (length >= fruit) {
                for (var i = 0; i < fruit; i++) {
                    subtractButton();
                }
            } else {
                $('#addB').empty();
            }


        }

    })

})
function  addButton() {
    var new_btn =document.createElement('button');
    new_btn.className='new';
    $('#addB').append(new_btn);
}
function  subtractButton() {
    var btn = $('.new')[0];
    btn.remove();
}
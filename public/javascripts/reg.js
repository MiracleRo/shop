/**
 * Created by miracle on 16-11-14.
 */
(function () {
    var url = "http://127.0.0.1:3000/";
    var btn_reg = document.getElementById('btn_reg');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var last=document.getElementById('last_ipt');
    function sendCmd(type, cb) {
        var u = url+type;
        $.post(u, {
            type: type,
            username: username.value,
            password: password.value
        }, function (data, status) {
            console.log(data);
            cb(data);
        });
    }
    btn_reg.onclick = function () {
        console.log(1);
        if(password.value==last.value){
            sendCmd('reg', function (data) {
                if (data.result == true) {
                    alert("注册成功");
                    window.open('./login.html');
                } else {
                    alert("注册失败");
                }
            });
        }else {
            alert('两次输入不一致！');
        }

    };
})();
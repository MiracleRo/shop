/**
 * Created by miracle on 16-11-14.
 */
(function () {
    var url = "http://127.0.0.1:3000/";
    var btn_log = document.getElementById('btn_log');
    var num = document.getElementById('num');
    var pass = document.getElementById('pass');
    function sendCmd(type, cb) {
        var u = url+type;
        $.post(u, {
            type: type,
            username: num.value,
            password: pass.value
        }, function (data, status) {
            console.log(data);
            cb(data);
        });
    }
    btn_log.onclick = function () {
            sendCmd('log', function (data) {
                if (data.result == true) {
                    alert("登录成功");
                    window.open('./index.html');
                } else {
                    alert("登录失败");
                }
            });
    };
})();
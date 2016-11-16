/**
 * Created by miracle on 16-10-24.
 */
var btn =document.getElementById('run_js');
btn.onclick = WebSocketTest;
function WebSocketTest()
{
    if ("WebSocket" in window)
    {
        console.log("您的浏览器支持 WebSocket!");

        // 打开一个 web socket
        var ws = new WebSocket("ws://localhost:3000/echo");

        ws.onopen = function()
        {
            // Web Socket 已连接上，使用 send() 方法发送数据
            ws.send("Clinet发送数据");
            console.log("数据发送中...");
        };

        ws.onmessage = function (evt)
        {
            var received_msg = evt.data;
            console.log("数据已接收...");
        };

        ws.onclose = function()
        {
            // 关闭 websocket
            console.log("连接已关闭...");
        };
    }
    else
    {
        // 浏览器不支持 WebSocket
        alert("您的浏览器不支持 WebSocket!");
    }
}
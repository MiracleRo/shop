/**
 * Created by miracle on 16-10-24.
 */
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port:3000});
wss.on('connection',function (ws) {
    console.log('服务器已链接');
   ws.on('message',function (message) {
       console.log(message);
   }) ;
});
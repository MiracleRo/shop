/**
 * Created by miracle on 16-10-21.
 */
var http = require("http");            //提供web服务
var url = require("url");            //解析GET请求
var query = require("querystring");    //解析POST请求

//服务
var server = function(request,response){
    //定义报文头
    response.writeHead(200,{"Content-Type":"text/json",
        "Access-Control-Allow-Origin":"*"});
    //判断是GET/POST请求
    if(request.method == "GET"){
        var params = [];
        params = url.parse(request.url,true).query;
        params['fruit'] = compute(params);
        response.write(JSON.stringify(params));
        response.end();
    }else{      var postdata = '';
        request.addListener("data",function(postchunk){
            console.log('data :'+postchunk);
            postdata += postchunk;
        })

        // POST结束输出结果
        request.addListener("end",function(){

            var params = query.parse(postdata);
            if(params.userName == 'admin'&&params.passWord=='admin'){
                params['res']=true;
            }else {
                params['res']=false;
            }
            console.log(params);
            response.write(JSON.stringify(params));
            response.end();
        })
    }

}
//开启服务器在127.0.0.1:8080
http.createServer(server).listen(8080);
console.log("Server start!");


//GET:http://127.0.0.1:8080/?num=32&num1=13&type=add
//print {"num":"32","num1":"13","type":"add","fruit":45}

//POST

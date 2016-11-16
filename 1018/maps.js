/**
 * Created by miracle on 16-10-18.
 */
var map = new BMap.Map("container");//初始化地图;
 map.centerAndZoom(new BMap.Point(126.652441,45.764641), 13);
// map.centerAndZoom(new BMap.Point(116.404, 39.915), 13);//设置中心点;
// map.addControl(new BMap.OverviewMapControl());//缩略地图控件;
// map.addControl(new BMap.ScaleControl());//比例尺控件;
//     var opt ={anchor:BMAP_ANCHOR_TOP_LEFT,setoff: new BMap.Size(10,30)};//设置控件位置
//     var opts ={type: BMAP_NAVIGATION_CONTROL_PAN };//平移缩放控件类型
//     map.addControl(new BMap.MapTypeControl(opt));//地图类型控件;
//     map.addControl(new BMap.CopyrightControl());//版权控件;
//     map.setCurrentCity('北京'); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用;
//     map.addControl(new BMap.NavigationControl(opts));//添加平移缩放控件;
// 定义一个控件类  funtion
// function ZoomControl() {
//     //设置默认位置 偏移
//     this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
//     this.defaultOffset = new BMap.Size(10,20);
// }
// //继承BMap.Control
//    ZoomControl.prototype = new BMap.Control();
// ZoomControl.prototype.initialize = function (map) {
//     var div =document.createElement('div');
//     div.appendChild(document.createTextNode('放大两级'));
//     div.style.cursor = 'pointer';
//     div.style.border = '1px solid gray';
//     div.style.backgroundColor='white';
//     div.onclick = function (e) {
//         map.zoomTo(map.getZoom()+2);
//     }
//     map.getContainer().appendChild(div);
//     return div;
// }
// var myControl = new ZoomControl();
// map.addControl(myControl);
// var opts = {
//     width : 200,     // 信息窗口宽度
//     height: 100,     // 信息窗口高度
//     title : "海底捞王府井店" , // 信息窗口标题
//     enableMessage:true,//设置允许信息窗发送短息
//     message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
// }
// var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象
//      map.addEventListener('click',function (e) {
//          map.openInfoWindow(infoWindow);
//     })
//   var infoWindow = new BMap.InfoWindow()
// map.addEventListener("click",function(e){
//     console.log(e.point.lng+"/"+e.point.lat);
// });
//  var lan =document.getElementById('lan');
// map.onmousemove=function(ev)
// {
//     var oEvent=ev||event;
//     lan.style.left = oEvent.clientX;
//
//     console.log("x坐标是:"+oEvent.clientX+",y坐标是:"+oEvent.clientY);
// }
// var pointA = new BMap.Point(126.708208,45.779728);
// var pointB = new BMap.Point(126.686074,45.785359);
// alert("古梨园到文化公园的距离为"+(map.getDistance(pointA,pointB)).toFixed(2)+"米");
// var polyline = new BMap.Polyline([pointA,pointB], {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  //定义折线
// map.addOverlay(polyline);
var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
// walking.search("文化公园", "古梨园");

var go =document.getElementById('go');
// function sea(x,y) {
//     console.log(x,y);
// }
go.onclick =function () {
    var xx= document.getElementById('xx').value;
    var yy = document.getElementById('yy').value;
    walking.search(xx,yy);
}

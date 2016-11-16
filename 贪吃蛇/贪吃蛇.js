/**
 * Created by miracle on 16-11-1.
 */

var btn =document.getElementById('btn');
var div = document.getElementById('snake');
var new_div;
var timer ;
onkeydown =function (ev) {
    if (ev.keyCode==39){
        go('left','offsetLeft',100);
        //go right;
    }
    if (ev.keyCode==37){
        go('left','offsetLeft',-100);
        //go left;
    }
    if (ev.keyCode==38){
        go('top','offsetTop',-100);
        //go left;
    }
    if (ev.keyCode==40){
        go('top','offsetTop',100);
        //go left;
    }
}
  function go (direction,offside,speed) {
     clearInterval(timer);
     timer =  setInterval(function () {
         div.style[direction] = div[offside] +speed +'px';
         if (div.offsetLeft==new_div.offsetLeft&&div.offsetTop==new_div.offsetTop){
             console.log(1);
         }
     },1000)
 }
var new_div = document.createElement('div');
new_div.setAttribute('class','new');
document.getElementsByClassName('big')[0].appendChild(new_div);
 function  makeAdiv() {
     new_div.style.left=parseInt(Math.random()*1000/40)*40+'px';
     new_div.style.top=parseInt(Math.random()*1000/40)*40+'px';
 }
 makeAdiv();

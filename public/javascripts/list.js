/**
 * Created by miracle on 16-11-14.
 */
(function () {
    var url = "http://127.0.0.1:3000/list";
    window.onload=function () {
        $.post(url,{},function (data, status) {
            for(var i=0;i<data.length;i++){
                addDiv();
                var imgs = document.getElementsByClassName('imgs')[0];
                var p=imgs.getElementsByTagName('p');
                var span=imgs.getElementsByTagName('span');
                var pics =imgs.getElementsByTagName('img');
                var name=document.createTextNode(data[i].goodname);
                var price=document.createTextNode('¥'+data[i].price);
                span[i].appendChild(name);
                p[i].appendChild(price);
                pics[i].setAttribute('src',data[i].src);
            }
        })
        function  addDiv() {
            var imgs=document.getElementsByClassName('imgs')[0];
            var buttons=imgs.getElementsByClassName('buttons')[0];
            var list_img=document.createElement('div');
            var a1=document.createElement('a');
            var good_cons=document.createElement('div');
            var p1=document.createElement('p');
            var a_img=document.createElement('img');
            var spans=document.createElement('span');
            list_img.appendChild(a1);
            list_img.appendChild(good_cons);
            list_img.appendChild(p1);
            a1.setAttribute('href','./car.html');
            a1.appendChild(a_img);
            list_img.setAttribute('class','list_img');
            good_cons.setAttribute('class','good_cons');
            good_cons.appendChild(spans);
            imgs.insertBefore(list_img,buttons);
        }
    }
})()

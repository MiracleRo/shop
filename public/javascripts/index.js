(function () {
	var adress =document.getElementsByClassName('nav')[0];
	var first_icon = document.getElementById('firstpage_icon');
	var allgoods = document.getElementsByClassName('all_goods')[0];
	var allicon =document.getElementById('all_icon');
	var personalcenter=document.getElementsByClassName('personalcenter')[0];
	var personal_down = document.getElementById('personal_down');
	adress.onmouseover = function(){
			first_icon.src='./images/top_down.png'
	}
	adress.onmouseout =function(){
			first_icon.src='./images/top_up.png'
	}
	//收货地址改变图片函数
	personalcenter.onmouseover = function(){
			personal_down.src='./images/top_down.png'
	}
	personalcenter.onmouseout =function(){
			personal_down.src='./images/top_up.png'
	}
	//用户导航栏改变图片函数
	allgoods.onmouseover = function(){
			allicon.src='./images/top_down.png'
	}
	allgoods.onmouseout =function(){
			allicon.src='./images/top_up.png'
	}
	var banner = ['./images/banner1.jpg','./images/banner2.jpg','./images/banner3.jpg','./images/banner4.jpg']
		if(document.getElementById('banners')){
			var banners = document.getElementById('banners');
			setInterval(function(){
				var src = banners.getAttribute('src');
				if (src==banner[0]) {
					banners.setAttribute('src',banner[1]);
				}else if (src==banner[1]) {
					banners.setAttribute('src',banner[2]);
				}else if (src==banner[2]) {
					banners.setAttribute('src',banner[3]);
				}else if (src==banner[3]) {
					banners.setAttribute('src',banner[0]);
				}
			},3000)
			var go_left = document.getElementById('go_left');
			var go_right = document.getElementById('go_right');
			go_left.onclick=function () {
				var src = banners.getAttribute('src');
				if (src==banner[0]) {
					banners.setAttribute('src',banner[3]);
				}else if (src==banner[1]) {
					banners.setAttribute('src',banner[0]);
				}else if (src==banner[2]) {
					banners.setAttribute('src',banner[1]);
				}else if (src==banner[3]) {
					banners.setAttribute('src',banner[2]);
				}
			}
			go_right.onclick=function () {
				var src = banners.getAttribute('src');
				if (src==banner[0]) {
					banners.setAttribute('src',banner[1]);
				}else if (src==banner[1]) {
					banners.setAttribute('src',banner[2]);
				}else if (src==banner[2]) {
					banners.setAttribute('src',banner[3]);
				}else if (src==banner[3]) {
					banners.setAttribute('src',banner[0]);
				}
			}
		}
	if (document.getElementById('wo')){
		var wo = document.getElementById('wo');
		var up =document.getElementById('upcl');
		var out =document.getElementById('out');
		var two = document.getElementById('two');
		var thr =document.getElementById('thr');
		var four=document.getElementById('for');
		function block(ul){
			ul.style.display='none';
		}
		block(two);
		block(thr);
		block(four);
		wo.onclick=function (){
			$('#two').fadeToggle();
		}

		out.onclick=function show(){
			$('#thr').fadeToggle();
		} ;
		up.onclick=function show(){
			$('#for').fadeToggle();
		} ;
	}
	if(document.getElementById('hl')){
		var adress = document.getElementsByClassName('adress')[0];
		var lins= adress.getElementsByTagName('a');
		for (var i =0 ;i<lins.length;i++){
			lins[i].onclick=function () {
				var title = this.getAttribute('title');
				var text = document.createTextNode(title);
				var hlj= document.getElementById('heilongjiang');
				var add =hlj.firstChild;
				hlj.replaceChild(text,add);
			}
		}
		function setadd() {
			var hl=document.getElementById('hl');
			var title = hl.getAttribute('title');
			var text = document.createTextNode(title);
			var hlj= document.getElementById('heilongjiang');
			hlj.insertBefore(text,first_icon);
		}
		setadd();
	}
	//改变首页地址方法;
    var search =document.getElementById('search');
    var search_img=document.getElementById('search_img');
    var searches='http://127.0.0.1:3000/search';
    search_img.onclick=function () {
        $.post(searches,{
        	keyword:search.value
		},function (data, status) {
			console.log(data);
			console.log(status);
			if(status=='success'){
				window.open('./list.html');
			}
        })

    }
})();

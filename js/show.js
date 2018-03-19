// 页尾 footer 城市切换特效 开始

/*
1.鼠标移入ft-nav的li中，li的背景变色、文字变成白色;
  同时原li恢复默认样式;

  2.鼠标移动到ft-nav中的li上时，ft-list显示对应的内容
*/
$(function(){
	var index = 0;
	// var index;
	
	$('.ft-nav li').mouseover(function(){

		$('.ft-nav li').eq(index).removeClass('active');
		$('.ft-list li').eq(index).removeClass('active');

		index = $(this).index();

		$('.ft-nav li').eq(index).addClass('active');
		$('.ft-list li').eq(index).addClass('active');

	})

})

// 页尾 footer 城市切换特效 开始结束

// 	在线咨询栏online-service 开始

/*进入页面时 默认咨询栏顶部距离浏览器底部为40px，
当点击text栏时，online-service的高度全部滑动显示，
再点击时候滑动成默认状态；*/


$(function(){



	$('.online-service .text').click(function(){

		var bottom = $('.online-service').css('bottom');
		// console.log(bottom);

		if(bottom == '-394px'){
			$('.online-service').animate({bottom:0},500);
			$('.online-service .shouqi').show();
		} else if(bottom == '0px'){
			$('.online-service').animate({bottom:'-394px'},500);
			$('.online-service .shouqi').hide();
		}

	})


// 	在线咨询栏online-service 结束


// 内容区导航 content-nav 开始



/* 
	1.当页面滑动到导航栏的顶部时，导航栏变成固定定位；
	2.鼠标点击 li 后，li中文字变成白色，
	3.并且原先位置的绿颜色滑动消失，绿色滑块滑动到点击位置；
	4.页面滚动到相应位置；
	5.如果点击位置就是绿色滑块所在位置，那么不变；

*/

// 页面滚动效果
$(window).scroll(function(){
	// 浏览器滚动距离
	var scrollTop = $(this).scrollTop();
	// console.log(scrollTop);

	// top-main距离页面顶部距离
	var offSettop = $('.main-box .top-main').offset().top;

	// 户型介绍距离页面顶部距离
	var hxjsoffSettop = $('.main-box .house-type').offset().top;

	// 楼盘相册离页面顶部距离
	var lpxcoffSettop = $('.album .album-con').offset().top;

	// 用户点评离页面顶部距离
	var yhdpffSettop = $('.remark').offset().top;


	// 如果浏览器滚动距离大于op-main距离页面顶部距离
	if(scrollTop >= offSettop){
		// .upfloat定位变成固定定位，并且显示
		$('.main-nav .upfloat').css({position:'fixed'}).show();

	} else {
		$('.main-nav .upfloat').css({position:'absolute'}).hide();
	}

})



/* 
	1.当页面滑动到导航栏的顶部时，导航栏变成固定定位；
	2.鼠标点击 li 后，li中文字变成白色，
	3.并且原先位置的绿颜色滑动消失，绿色滑块滑动到点击位置；
	4.页面滚动到相应位置；
	5.如果点击位置就是绿色滑块所在位置，那么不变；

*/

// li点击特效
/*
	思路分析，当我点击内容区导航main-nav的哪个li上哪个页面就跳转到page-container的那个div（孩子）；
*/
// var index = 0;
var len = $('.top-main li').length/2;


$('.main-nav li').click(function(){
	$('.main-nav a').removeClass('active');
	// console.log(index);

	var index = $(this).index();

	// console.log(index);


	$(this).children('a').addClass('active');
	$('.scr-bg').animate({'left':index*97});



	// if(index == 0){
	// 	$(window).scrollTop() = $('.main-box').offset().top() - $(window).height();

	// }

})



/*var maincontentIndex = $('.main-content > div').index();
console.log(maincontentIndex);*/

$('.main-content > div').click(function(){
	
	
	var maincontentIndex = $(this).index();
	console.log(maincontentIndex);

	

})

var maincontentLen = $('.main-content>div').length;
console.log(maincontentLen);









})
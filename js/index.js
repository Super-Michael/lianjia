$(function(){


// 登陆界面 插件弹窗开始
$('#login').click(function() {
            var d = dialog({
                title: '手机快捷登录',
                content: $('.login-box'),
                okValue: '确定',
                ok: function() {
                    // alert('你点击了登录按钮');
                    // 验证用户名和密码格式是否正确
                    // 将用户名和和密码提交到服务器
                    // 关闭对话框
                },
                cancelValue: '取消',
                // 点击了取消按钮，执行的函数
                cancel: function() {
                    alert('你点击了取消按钮');
                },
                // 状态栏
                statusbar: '<label><input type="checkbox">7天之内免登陆</label>',
                cancelDisplay: false,
                width: 298,
                height: 130,
                padding: 100,
                // true：弹框固定定位，不设置或者设置为false为绝对定位
                fixed: true,
                // 点击空白处快速关闭对话框
                quickClose: false
            });
            // 展示对话框
            d.show();
        });

// 登录界面弹窗结束


/*进入界面让文字自动向上滚动*/
$(function(){



	var len = $('.scroll-msg li').length;
	var index = 0;

	$('.scroll-msg li:eq(0)').clone(true).appendTo($('.scroll-msg'));

	setInterval(function(){
		index++;
		// console.log(index);
		if (index > len) {

			index = 1;
			$('.scroll-msg').css('margin-top',0);

		}

		$('.scroll-msg').animate({'margin-top':-35*index},500);

	},2000);

})

})



// 页头 page-head 中scroll-msg滚动信息特效 结束


// 页头 page-head 中header-search鼠标点击特效  开始
/*鼠标点击 li中文字 ：

	1.文字颜色变成白色，原先的那个字体颜色变成默认颜色/
	鼠标移入哪个li哪个li变色，移入当前选中的li不变色；
	2.搜索框input中的placehouder的提示文字跟着变化,点击一个li，placeholder换一个内容
	3.button按钮中的文字也随之改变；

*/
$(function(){

	var index = 0;
	var len = $('.search-nav li').length;
	var data = ['试试输入地铁线/站在地铁附近找房，如 13号线', '请输入楼盘名称开始找房', '输入地铁线或地铁站可以找地铁附近的房源', '请输入小区名开始查找小区', '房产知识有疑问？来搜搜吧~'];
	$('.search-menu li').mouseover(function(){

		$(this).addClass('change-color');
		// console.log('abcd');

	}).mouseout(function(){
		$(this).removeClass('change-color');


	}).click(function(){

		// 当前的li移除颜色
		$('.search-menu li').eq(index).removeClass('active');
		$('.header-search .search-left').removeAttr('placeholder');



		// index等于点击的li的索引
		index = $(this).index();

		console.log(index);

		// 点击的li改变颜色
		$('.search-menu li').eq(index).addClass('active');
		$('.search-menu .iconfont').animate({'left':(62*index)+22},100);
		  	// 变换input中placeholdser的内容 定义data数组的方法
		$('.header-search .search-left').attr('placeholder',data[index]);

		  	// 变换input中placeholdser的内容 判断的做法

			// if (index == 1){
			// 	$('.header-search .search-left').attr('placeholder','请输入楼盘名称开始找房');
			// } else if (index == 2) {
			// 	$('.header-search .search-left').attr('placeholder','输入地铁线或地铁站可以找地铁附近的房源');
			// } else if (index == 3) {
			// 	$('.header-search .search-left').attr('placeholder','请输入小区名开始查找小区');
			// } else if (index == 4) {
			// 	$('.header-search .search-left').attr('placeholder','房产知识有疑问？来搜搜吧~');
			// } else if(index == 0){
			// 	$('.header-search .search-left').attr('placeholder','试试输入地铁线/站在地铁附近找房，如 13号线~');
 		// 	}

			// 变换button按钮中的内容
			if(index <= 2) {
				$('.header-search .search-right').text('开始找房');
			} else {
				$('.header-search .search-right').text('开始搜索');
			}

			console.log(index);
	})

})


// 页头 page-head 中header-search鼠标点击特效  结束

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


	// $('.online-service .text').click(function(){
	// 	$('.online-service').toggle(function(){
	// 		$('.online-service').animate({bottom:'434px'},10000);
	// },function(){
	// 		$('.online-service').animate({bottom:'40px'},10000);
	// 	})

	// }) 

	

})

// 	在线咨询栏online-service 结束
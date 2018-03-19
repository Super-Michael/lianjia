// 页头导航条 气泡特效

/*$(function(){
	$('.header-box .guide').click(function() {
            var d = dialog({
                title: '指南',
                content: '<a src="">百科</a>',
                align: 'bottom'
            });
            // 展示
            d.show(document.querySelector('.box'));
        })



})*/

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

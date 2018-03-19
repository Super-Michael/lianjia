$(function(){

// 电话号码验证 ----开始
	/*
	输入11位数字电话号码：
		1.当input失焦的时候，进行验证，如果验证不通过 errorBox 显示；
		2.input再次聚焦时，所有提示全部隐藏；

	*/

	$('.short-msg').blur(function(){

		// 获取用户输入的值
		var value = $(this).val().trim();

		if(value.length == 0){
			return;
		}

			// 手机号正则
		var reg = /^(13[0-9]|14[57]|15[123567890]|17[34678]|18[0-9]|19[9])[0-9]{8}$/;

			// 验证手机号是否正确
		if(!reg.test(value)){
			$('.login-box .errorBox').show();
			$('.short-msg').attr('check-res','false');

		} else{
			$('.login-box .through').show();
			$('.short-msg').attr('check-res','true');
		}


	})

		// 当input再次聚焦的时候隐藏之前的提示
	$('.short-msg').focus(function(){
		if($('.short-msg').attr('check-res') == 'false'){
			$('.login-box .errorBox').hide();
			$('.short-msg').attr('check-res','true');
		} else if ($('.short-msg').attr('check-res') == 'true'){
			$('.login-box .through').hide();
		}
	})

// 电话号码验证 ----结束




})
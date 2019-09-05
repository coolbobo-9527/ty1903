$(function () {
	//点击生成注册窗口
	$('.cbtn').click(function () {
		$('body .mark').css('display', 'block');
		$('body .zhuce').css('display', 'block');
	})
	$('body .mark').click(function () {
		$('body .mark').css('display', 'none');
		$('body .zhuce').css('display', 'none');
	})
	// 注册界面手机号栏失去焦点
	$('.zhuce .zhuce-in-1').blur(function () {
		phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
		if ($(this).val() == "") {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("手机号码不能为空!");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
			return;
		} else if (!phoneReg.test($(this).val())) {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("请输入正确的手机号码!");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
		} else {
			$(this).addClass("correctInput");
			$(this).next().empty();
		}
	})
	// 登录界面生成验证码

	function shuffle() {
		var arr = ['8', 'r', 'Q', '4', 'S', '6', 'w', 'x', 'D', 'I', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '2', 's', 't', '8', 'v', '7', 'x', 'y', 'z', 'A', 'B', 'C', '9', 'E', 'F', 'G', 'H', '0', 'J', 'K', 'L', 'M', 'N', 'O', 'P', '3', 'R', '5', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		return arr.sort(function () {
			return (Math.random() - .5);
		});
	};
	shuffle();

	function showAuthCode() {
		var ar1 = '';
		var code = shuffle();
		for (var i = 0; i < 4; i++) {
			ar1 += code[i];
		};
		$('.zhuce .code').text(ar1);
	};
	showAuthCode();
	$(".zhuce .code").click(function () {
		showAuthCode();
	});
	// 验证码框失焦
	$(".zhuce .zhuce-in-2").blur(function () {
		var code1 = $('.zhuce .zhuce-in-2').val().toLowerCase();
		var code2 = $(".zhuce .code").text().toLowerCase();
		if ($('.zhuce .zhuce-in-2').val() == "") {
			$('.zhuce .zhuce-in-2').addClass("errorInput");
			$(this).next().next().html("验证码不能为空！");
			$(this).next().next().css("color", "red");
			$(this).next().next().css("font-size", "12px");
			//console.log("11111")
			return;
		} else if (code1 != code2) {
			$(this).addClass("errorInput");
			$(this).next().next().css("display", "block").html("验证码输入错误！");
			//console.log("22222")
			$(this).next().next().css("color", "red");
			$(this).next().next().css("font-size", "12px");
		} else {
			$(this).removeClass("errorInput");
			$(this).next().next().empty();
			$(this).addClass("correctInput");
		}
	})

	//  密码框失焦
	$(".zhuce .zhuce-in-3").blur(function () {
		var reg = /^[A-Za-z0-9]{6,}$/
		if (reg.test($(this).val())) {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("密码格式正确！");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
		} else if (!reg.test($(this).val())) {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
		} else {
			$(this).removeClass("errorInput");
			$(this).next().empty();
			$(this).addClass("correctInput");
		}

	});
	// //验证密码框失焦
	// var pwd1 = $(".zhuce .zhuce-in-3").val();
	// var pwd2 = $(".zhuce .zhuce-in-4").val();
	// console.log(pwd1);
	$(".zhuce .zhuce-in-4").blur(function () {
		var pwd1 = $(".zhuce .zhuce-in-3").val();
		var pwd2 = $(this).val();
		console.log(pwd2)
		if (pwd2 == "") {
			$(this).removeClass("errorInput");
			$(this).next().html("确认密码不能为空！");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
			$(this).addClass("errorInput");
			return;
		} else if (pwd1 != pwd2) {
			$(this).addClass("errorInput");
			$(this).removeClass("correctInput");
			$(this).next().css("display", "block").html("两次密码输入不一致！");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
		} else {
			$(this).removeClass("errorInput");
			$(this).addClass("correctInput");
			$(this).next().empty();
		}
		// console.log(pwd1);
	});

	// console.log(pwd1);
	// if(pwd1 == pwd2 && reg.test($(this).val()) && code1 == code2 && phoneReg.test($(this).val())){

	// }
	// 注册页面注册按钮
	
		$('.zhuce .zhuce-in-1').blur(function () {
			phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if ($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("手机号码不能为空!");
				$(this).next().css("color", "red");
				$(this).next().css("font-size", "12px");
				return;
			} else if (!phoneReg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入正确的手机号码!");
				$(this).next().css("color", "red");
				$(this).next().css("font-size", "12px");
			} else {
				$(this).addClass("correctInput");
				$(this).next().empty();
			}
		})
		// 登录界面生成验证码
	
		function shuffle() {
			var arr = ['8', 'r', 'Q', '4', 'S', '6', 'w', 'x', 'D', 'I', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '2', 's', 't', '8', 'v', '7', 'x', 'y', 'z', 'A', 'B', 'C', '9', 'E', 'F', 'G', 'H', '0', 'J', 'K', 'L', 'M', 'N', 'O', 'P', '3', 'R', '5', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			return arr.sort(function () {
				return (Math.random() - .5);
			});
		};
		shuffle();
	
		function showAuthCode() {
			var ar1 = '';
			var code = shuffle();
			for (var i = 0; i < 4; i++) {
				ar1 += code[i];
			};
			$('.zhuce .code').text(ar1);
		};
		showAuthCode();
		$(".zhuce .code").click(function () {
			showAuthCode();
		});
		// 验证码框失焦
		$(".zhuce .zhuce-in-2").blur(function () {
			var code1 = $('.zhuce .zhuce-in-2').val().toLowerCase();
			var code2 = $(".zhuce .code").text().toLowerCase();
			if ($('.zhuce .zhuce-in-2').val() == "") {
				$('.zhuce .zhuce-in-2').addClass("errorInput");
				$(this).next().next().html("验证码不能为空！");
				$(this).next().next().css("color", "red");
				$(this).next().next().css("font-size", "12px");
				//console.log("11111")
				return;
			} else if (code1 != code2) {
				$(this).addClass("errorInput");
				$(this).next().next().css("display", "block").html("验证码输入错误！");
				//console.log("22222")
				$(this).next().next().css("color", "red");
				$(this).next().next().css("font-size", "12px");
			} else {
				$(this).removeClass("errorInput");
				$(this).next().next().empty();
				$(this).addClass("correctInput");
			}
		})
	
		//  密码框失焦
		$(".zhuce .zhuce-in-3").blur(function () {
			var reg = /^[A-Za-z0-9]{6,}$/
			if (reg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("密码格式正确！");
				$(this).next().css("color", "red");
				$(this).next().css("font-size", "12px");
			} else if (!reg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
				$(this).next().css("color", "red");
				$(this).next().css("font-size", "12px");
			} else {
				$(this).removeClass("errorInput");
				$(this).next().empty();
				$(this).addClass("correctInput");
			}
	
		});
		// //验证密码框失焦
		// var pwd1 = $(".zhuce .zhuce-in-3").val();
		// var pwd2 = $(".zhuce .zhuce-in-4").val();
		// console.log(pwd1);
		$(".zhuce .zhuce-in-4").blur(function () {
			var pwd1 = $(".zhuce .zhuce-in-3").val();
			var pwd2 = $(this).val();
			console.log(pwd2)
			if (pwd2 == "") {
				$(this).removeClass("errorInput");
				$(this).next().html("确认密码不能为空！");
				$(this).next().css("color", "red");
				$(this).next().css("font-size", "12px");
				$(this).addClass("errorInput");
				return;
			} else if (pwd1 != pwd2) {
				$(this).addClass("errorInput");
				$(this).removeClass("correctInput");
				$(this).next().css("display", "block").html("两次密码输入不一致！");
				$(this).next().css("color", "red");
				$(this).next().css("font-size", "12px");
			} else {
				$(this).removeClass("errorInput");
				$(this).addClass("correctInput");
				$(this).next().empty();
				// alert('注册成功！');

			}
		// 	//注册
		// 	click(function(){
		// 		if(pwd2 == "" &&  pwd1 != pwd2 ){
		// 			alert();

		// 		}else{

		// 		}
		// 	})
		// 	// console.log(pwd1);
			
		// });

		var uname = $('.zhuce-in-1').val();
		//获取密码
		var upwd = $('.zhuce-in-3').val();
		//判断cookie中是否存在
            //获取 cookie 
            // registors={"张三" : 123,"李四" : 456}
            var cookieStr = $cookie.get('registors') ? $cookie.get('registors') : '';
            //将cookie字符串转为cookie对象
            var cookieObj = convertCookieStrToCookieObj(cookieStr);
            //判断用户名是否存在
            if (uname in cookieObj) {
                alert('用户名已存在！');
                return;
            } else {
                cookieObj[uname] = upwd;
            }
            //重新创建cookie
            $cookie.create('registors', JSON.stringify(cookieObj), 7);
            // alert('注册成功！');
    
            //将字符串转为对象
        	function convertCookieStrToCookieObj(str) {
            if (!str) {
                return {};
            }
            return JSON.parse(str);
        }
	});




	// 登录页面手机号码失焦
	$('.cont .txt1').blur(function () {
		phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
		if ($(this).val() == "") {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("手机号码不能为空!");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
			return;
		} else if (!phoneReg.test($(this).val())) {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("请输入正确的手机号码!");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
		} else {
			$(this).addClass("correctInput");
			$(this).next().empty();
		}
	})

	// 登录页面密码失焦
	$(".cont .txt2").blur(function () {
		reg = /^[A-Za-z0-9]{6,}$/
		if (reg.test($(this).val())) {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("密码格式正确！");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
		} else if (!reg.test($(this).val())) {
			$(this).addClass("errorInput");
			$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			$(this).next().css("color", "red");
			$(this).next().css("font-size", "12px");
		} else {
			$(this).removeClass("errorInput");
			$(this).next().empty();
			$(this).addClass("correctInput");
		}

	});
})

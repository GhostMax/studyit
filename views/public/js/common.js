

define(['jquery','cookie','template','nprogress'],function($,cookie,template,NProgress){
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	if(!$.cookie("PHPSESSID")&&location.pathname != "/login"){
		window.location.href = "/login";
	}

	if(location.pathname != "/login" && location.pathname != "/dashboard/login.html" != location.pathname != "/views/dashboard/login.html"){
		var htmlstr = template("tp_aside_avatar",JSON.parse($.cookie("tcInfo")));
		$(".aside>.profile").html(htmlstr);
	}

	$(".nav>li>a").on("click",function(){
		$.ajax({
			url:"api/logout",
			type:"post",
			success:function(result){
				window.location.href = "/";
				alert(result.msg);
			}
		})
	})
})

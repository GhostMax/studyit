/**
 * Created by max on 2017/8/14.
 */
define(['jquery','cookie'],function($){
    $('#formLogin').submit(function(){
        var $data = $(this).serialize();//获取表单数据
        $.ajax({
            url:"api/login",//方向代理
            type:"post",
            data:$data,
            success:function(into){
                $.cookie("tcInfo",JSON.stringify(into.result));
                window.location.href = "/";
            },
            error:function(error){
                alert("用户名或密码错误")
            }
        })
        return false;
    })
})
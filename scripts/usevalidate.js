$(function(){
    //引入validate插件
     $("#contact form").validate({
        rules:{
            username:{
                required:true,
                minlength: 2
            },
            email:{
                required: true,
                email: true
            },
            comment:"required"
        }
    });
    //引入form插件
    $("#contact form").ajaxForm(function(){
        alert("提交成功");
    })
})
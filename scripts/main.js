$(function(){
    var $link = $(".links li a");
    $(".links li a").hover(function(){
        $(this).addClass("linkhover");
    },function(){
        $(this).removeClass("linkhover");//不能改变a的文字颜色
    })
    /*主页图片自动切换,找一个替换的方法*/
    var adTime = null;
    var j=1;
    $("#bannerImg").hover(function(){
        if (adTime){
            clearInterval(adTime);
        }
    },function(){
        adTime = setInterval(function(){
            showBannerP("#place",j);
            autochangeImage("#bannerImg",j);
            //alert(imgSrc);
            j++;
            if(j==4){j=0;}
        },5000);
    }).trigger("mouseleave");//触发事件；
    $("#place0").show();
    showImageIntro();

    //照片集页切换照片
    var m=4;  
    $("#next1").click(function(){
         var k=1;
         if(m<8){
            for(n=0;n<4;n++){
                    var imageId = "#2011-"+k;
                    var ahref = "#a2011-"+k;
                    m++;
                    changeImage(imageId,m,"src");
                    changeImage(ahref,m,"href");
                    k++;
            }
        }else{
             return false;
         }
    })
    $("#prev1").click(function(){
            k=1;
            if(m>5){
                m=m-8;
                for(n=0;n<4;n++){
                    var imageId = "#2011-"+k;
                    var ahref = "#a2011-"+k;
                    m++;
                    changeImage(imageId,m,"src");
                    changeImage(ahref,m,"href");
                    k++;
                }
            }else{
                return false;
            }
    })
    //相册2
    var p=4;  
    $("#next2").click(function(){
         var k=1;
         if(p<8){
            for(n=0;n<4;n++){
                    var imageId = "#2012-"+k;
                    var ahref = "#a2012-"+k;
                    p++;
                    changeImage(imageId,p,"src");
                    changeImage(ahref,p,"href");
                    k++;
            }
        }else{
             return false;
         }
    })
    $("#prev2").click(function(){
            k=1;
            if(p>5){
                p=p-8;
                for(n=0;n<4;n++){
                    var imageId = "#2012-"+k;
                    var ahref = "#a2012-"+k;
                    p++;
                    changeImage(imageId,p,"src");
                    changeImage(ahref,p,"href");
                    k++;
                }
            }else{
                return false;
            }
    })
    //相册3
    var q=4;  
    $("#next3").click(function(){
         var k=1;
         if(q<8){
            for(n=0;n<4;n++){
                    var imageId = "#2016-"+k;
                    var ahref = "#a2016-"+k;
                    q++;
                    changeImage(imageId,q,"src");
                    changeImage(ahref,q,"href");
                    k++;
            }
        }else{
             return false;
         }
    })
    $("#prev3").click(function(){
            k=1;
            if(q>5){
                q=q-8;
                for(n=0;n<4;n++){
                    var imageId = "#2016-"+k;
                    var ahref = "#a2016-"+k;
                    q++;
                    changeImage(imageId,q,"src");
                    changeImage(ahref,q,"href");
                    k++;
                }
            }else{
                return false;
            }
    })
    //blog页面放大图片
    $(".placePhoto img").mouseover(function(){
        $(this).animate({width:"700px",
                        height:"450px",
                        left:"-50px",
                        top:"-56.25px"});
    }).mouseout(function(){
        $(this).animate({width:"600px",
                        height:"337.5px",
                        left:"0px",
                        top:"0px"});
    })
    //大屏显示照片
    //contact页
})
//相册集更换图片
function changeImage(a,j,k){
    var imgSrc = $(a).attr(k);
    //alert(imgSrc);
    var i = imgSrc.lastIndexOf(".");
    var unit = imgSrc.substring(i);
    var imgName = imgSrc.substring(0,i-1);
    imgSrc = imgName + j + unit;
    $(a).attr(k,imgSrc);
}
/*图片自动切换函数*/
function autochangeImage(a,j){
    var imgSrc = $(a).attr("src");
    //alert(imgSrc);
    var i = imgSrc.lastIndexOf(".");
    var unit = imgSrc.substring(i);
    var imgName = imgSrc.substring(0,i-1);
    imgSrc = imgName + j + unit;
    $(a).attr("src",imgSrc);
}
//图片切换提示
function showBannerP(b,j){
    $(b+j).show().siblings("p").hide();
}
//主页图片文字提示
function showImageIntro(){
    $(".imgList li").mouseover(function(){
        $(this).find("p").fadeIn().stop(false,true);
    }).mouseleave(function(){
        $(this).find("p").fadeOut().stop(false,true);
    })   
}
//清空占位符

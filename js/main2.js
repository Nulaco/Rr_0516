$(document).ready(function() {


    $('.showmenu').on('click',function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });


   $(function(){
    $(".back-to-top").hide();

    $(function () {
      $(window).scroll(function(){
       if ($(window).scrollTop()>300){
        $(".back-to-top").fadeIn(300);
       }else{
        $("#back-to-top").fadeOut(300);
       }
     });

     $(".back-to-top").click(function(){
      $('body,html').animate({scrollTop:0},500);
       return false;
      });
     });


     $(function(){
         // 用來顯示大圖片用
         var $showImage = $('#show-image');
      
         // 當滑鼠移到 .abgne-block-20120106 中的某一個超連結時
         $('.products-intro-LB a').mouseover(function(){
             // 把 #show-image 的 src 改成被移到的超連結的位置
             $showImage.attr('src', $(this).attr('href'));
         }).click(function(){
             // 如果超連結被點擊時, 取消連結動作
             return false;
         });
     });
    });

    $(".productLeft-top").click(function(){
        $(".productLeft").slideToggle({scrollTop:0},500);
    });


   
 });


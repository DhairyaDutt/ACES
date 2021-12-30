$(function(){
    $(document).scroll(function(){
        var $nav = $("#nb1");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  
    });
  });
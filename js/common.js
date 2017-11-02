$(document).ready(function() {
    $(".lang__item").click(function(){
        $(".lang__item").removeClass("lang__item_active");
        $(this).addClass("lang__item_active");
    });
    $(".main-menu__button").click(function(){
        $(".hamburger").toggleClass("hamburger_active");
        $(".main-menu__list").slideToggle();
    });
    $(".main-menu__item_with-submenu").click(function(){
        if($(window).outerWidth() <= 1023 ){
            $(this).toggleClass("opened");
            $(this).children(".sub-menu").slideToggle().css("display","flex");
        }
    });
    $(window).on("resize", function(){
        if($(window).outerWidth() >= 1024 ){
            $(".main-menu__list").css("display","flex");
            $(".sub-menu").css("display","flex");
        }
        else {
            $(".main-menu__button").removeClass("hamburger_active");
            $(".main-menu__list").css("display","none");
            $(".main-menu__item_with-submenu").removeClass("opened");
            $(".sub-menu").slideUp();
        }
    });
    $(".service").click(function(){
        $(".service").addClass("service_unactive");
        $(this).removeClass("service_unactive");
    });
});

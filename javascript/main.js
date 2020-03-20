$(document).ready(() => {
    $(".main_content").children().css("display","none"); 
    $(".main_content").children("#home").css("display","block");
    $(".side-nav__link").click(function() {
        let thing = $(this).attr('data');
        $(".main_content").children().css("display","none");
        $(".main_content").children('#' + thing).css("display","block");
        $(".header__title").text(thing);
    });
})

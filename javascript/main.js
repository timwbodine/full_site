$(document).ready(() => {
    $(".main_content").children().css("display","none"); 
    $(".main_content").children("#home").css("display","block");
    $(".nav-button").click(function() {
        let thing = $(this).attr('data');
        $(".main_content").children().css("display","none");
        $(".main_content").children('#' + thing).css("display","block");
        $(".header-title").text(thing);
    });
})

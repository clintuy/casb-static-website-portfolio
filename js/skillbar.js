$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
        width: $(this).attr("data-width")
    },2000)
});
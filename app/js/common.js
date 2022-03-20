// btn top scroll
$("body").on("click", ".btn-top-scroll", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});
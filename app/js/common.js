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

$('.btn-search').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('.form-search').fadeToggle();
});

$(".menu-category__links").on('click', function (e) {
    e.preventDefault();

    var id = $(this).attr('data-tab'),
        content = $('.menu-category__info[data-tab="'+ id +'"]');

    $('.menu-category__links.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.menu-category__info.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

$('.btn-collapse').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.menu-category__info').removeClass('active');
});

$('[data-toggle="tooltip"]').tooltip();
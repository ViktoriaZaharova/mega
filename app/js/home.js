// $('.reviews-slider').slick({
//     slidesToShow: 2,
//     arrows: true,
//     appendArrows: '.reviews-slider__nav',
//     prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
//     nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
// });

// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 992) {
        $('.reviews-slider:not(.slick-initialized)').slick({
            slidesToShow: 2,
            arrows: true,
            appendArrows: '.reviews-slider__nav',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });
    } else {
        $(".reviews-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.certificate-slider').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.materials-slider').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

// reviews show
$('.btn-add-reviews').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this).find('.btn-text'),
        content = $(this).parents('.add-reviews').find('.reviews-hidden');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Скрыть');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Оставить отзыв');

        content.slideUp();
    }
});
// reviews show end
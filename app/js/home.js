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
    }
    if ($(window).width() < 576) {
        $('.popular-products-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            arrows: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });
    }
    else {
        $(".reviews-slider.slick-initialized").slick("unslick");
        $(".popular-products-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.certificate-slider').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                variableWidth: true
            }
        }
    ]
});

$('.materials-slider').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
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

    if ( $(window).width() <= 700) {
        $('.charts').slick({
            infinite:true,
            slidesToShow:1,
            slidesToScroll:1,
            arrows:false,
            dots:true,
        });
    }
    else {
    $('.charts').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    }

      
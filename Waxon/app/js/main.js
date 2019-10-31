$(document).ready(function() {
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('open');
  })

  $('.search-open').on('click', function() {
    $('.search-form').toggleClass('open');
  })

  $('.cart-open').on('click', function() {
    $('.cart-link').toggleClass('open');
  })

  $("#navigation").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1900);
});


  $('.header-slider-inner').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 760,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
        }
      }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
    ]
  });

  $('.realization-slider-inner').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 760,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
        }
      }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
    ]
  });
  $('.recent-slider-inner').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        }
      },
      {
        breakpoint: 760,
       settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 320,
        settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
        }
      }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
    ]
  });
});

  var time = 2, cc = 1;
  $(window).scroll(function(){
$('#counter').each(function(){
  var
  cPos = $(this).offset().top,
  topWindow = $(window).scrollTop();
  if (cPos < topWindow + 200) {
    if (cc < 2) {
    $('.counters__inner-point').addClass('counters__inner-point-screen');
  $('div').each(function(){
    var 
    i = 1,
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this),
    int = setInterval(function(){
      if (i <= num) {
        that.html(i);
      }
      else {
        cc = cc + 2;
        clearInterval(int);
      }
      i++;
    },step);
  });
}
}
});
});



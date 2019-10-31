$(document).ready(function() {
  $('.header-up-lang-open').on('click', function() {
    $('.header-up-lang-link').toggleClass('open');
  })
  $('.header-up-doll-open').on('click', function() {
    $('.header-up-doll-link').toggleClass('open');
  })
  $('.header-menu-opener').on('click', function(e) {
    e.preventDefault();
    $('.header-menu-dropdown').slideToggle(500);
  })
  var $menu = $('.navbar');

  $('.navbar-open').on('click', function() {
    $menu.addClass('navbar_open');
  });

  $('.navbar-close').on('click', function() {
    $menu.removeClass('navbar_open');
  });

  $('.categories-slider-inner').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  // page init
jQuery(function(){
	initTabs();
});

// content tabs init
function initTabs() {

	jQuery('ul.tabset').contentTabs({
		autoHeight: true,
		animSpeed: 300,
		effect: 'fade',
		tabLinks: 'a'
	});
	// jQuery('ul.slide-tabset').contentTabs({
	// 	addToParent: true,
	// 	animSpeed: 500,
	// 	effect: 'slide',
	// 	tabLinks: 'a'
	// });
	// jQuery('ul.multi-tabset').contentTabs({
	// 	tabLinks: 'a'
	// });
}

  
    jQuery(function(){
      initTabs();
    });
    
    // content tabs init
    function initTabs() {
    
      jQuery('ul.featured-tabset, ul.specials-tabset, ul.natural-tabset').contentTabs({
        autoHeight: true,
        animSpeed: 300,
        effect: 'fade',
        tabLinks: 'a'
      });
      // jQuery('ul.slide-tabset').contentTabs({
      // 	addToParent: true,
      // 	animSpeed: 500,
      // 	effect: 'slide',
      // 	tabLinks: 'a'
      // });
      // jQuery('ul.multi-tabset').contentTabs({
      // 	tabLinks: 'a'
      // });
    }
    
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
          $('.back-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('.back-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
    $('.back-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
    
    
  });

});

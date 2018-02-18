(function($) {

  "use strict";
  $(window).on('scroll', function() {
      if ($(window).scrollTop() > 200) {
          $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
          $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
  });


    new WOW().init();

 $('.main-navigation').onePageNav({
        currentClass: 'active'
});

    $(window).on('load', function() {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });
$('#loader').fadeOut();
}(jQuery));

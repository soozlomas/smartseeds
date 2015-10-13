$(document).ready(function(){

  //toggles menu that slides down when screen width is between 896px and 508px
  $('.tablethamburger').click(function() {
      $('#tabletnav').toggle("slow");
  });

  //toggles menu that slides down when screen width is less that 508px
  $('.mobilehamburger').click(function() {
      $('#mobilenav').toggle("slow");
  });

  //creates effect of images flipping over to show text behind as used on front page
  if ( $('html').hasClass('csstransforms3d') ) {
    $('.artGroup').removeClass('slide').addClass('flip');
    $('.artGroup.flip').on('mouseenter',
      function () {
        $(this).find('.artwork').addClass('theFlip');
      });
    $('.artGroup.flip').on('mouseleave',
      function () {
        $(this).find('.artwork').removeClass('theFlip');
      });
  } else {
    $('.artGroup').on('mouseenter',
      function () {
        $(this).find('.detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
      });
    $('.artGroup').on('mouseleave',
      function () {
        $(this).find('.detail').stop().animate({bottom: ($(this).height() + -1) }, 500, 'easeOutCubic');
      });
    }

  //creates sticky top navigation on all pages other than the front page
  var $menu = $('#additionalhead'),
  menuOffsetTop = $menu[0].offsetTop;

  $(document).bind('ready scroll', function () {
      var docScroll = $(this).scrollTop();

      if (docScroll >= menuOffsetTop) {
          $menu.addClass('fixed');
      } else {
          $menu.removeClass('fixed');
      }
  });

});

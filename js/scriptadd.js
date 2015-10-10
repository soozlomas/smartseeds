$(document).ready(function(){

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

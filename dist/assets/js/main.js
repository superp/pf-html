var initMenu;

initMenu = function() {
  $('.menu_btn').on('click', function() {
    return $('body').toggleClass('menu-opened');
  });
  return $(document).mouseup(function(e) {
    var menu;
    menu = $('.navigation, .menu_btn');
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      $('body').removeClass('menu-opened');
    }
  });
};

$(function() {
  return initMenu();
});
  $(function() {
    return initMenu();
  });

}).call(this);

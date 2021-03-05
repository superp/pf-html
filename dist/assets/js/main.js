var initAccordion, initMenu;

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

initAccordion = function() {
  return $('.faq').accordion();
};

$(function() {
  initMenu();
  return initAccordion();
});
) {
    initMenu();
    return initAccordion();
  });

}).call(this);

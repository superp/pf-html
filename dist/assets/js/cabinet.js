var initDropMenu, initMobileMenu, initTabs, initUi;

initDropMenu = function() {
  return $('.cabinet-navigation_menu').accordion({
    item: '.menu-drop',
    opener: '.menu-drop',
    content: '.drop-list'
  });
};

initUi = function() {
  $('.tooltipster').tooltipster();
  $('select').select2({
    minimumResultsForSearch: 2e308
  });
  return $('.input_tag').tagify();
};

initTabs = function() {
  $('.tabs_list li > a').on('click', function(e) {
    var tabId;
    $('.tabs_list li > a').removeClass('active');
    e.preventDefault();
    tabId = $(this).attr('href');
    $('.tabs_item').hide();
    $(this).addClass('active');
    return $('.tabs_content').find(tabId).show();
  });
  $('.influencer-tabs_list li > a').on('click', function(e) {
    var tabId;
    $('.influencer-tabs_list li > a').removeClass('active');
    e.preventDefault();
    tabId = $(this).attr('href');
    $('.influencer-tabs_content .tabs_item').hide();
    $(this).addClass('active');
    return $('.influencer-tabs_content').find(tabId).show();
  });
  return $('.language-tabs_list li > a').on('click', function(e) {
    var tabId;
    $('.language-tabs_list li > a').removeClass('active');
    e.preventDefault();
    tabId = $(this).attr('href');
    $('.language-tabs_content .tabs_item').hide();
    $(this).addClass('active');
    return $('.language-tabs_content').find(tabId).show();
  });
};

initMobileMenu = function() {
  $('.menu-drop-mob').on('click', function(e) {
    var container, menuId, menuItem, self;
    self = $(this);
    container = $('.cabinet-navigation-list');
    menuId = self.data('menu');
    if (menuId) {
      menuItem = container.find(`ul[data-item='${menuId}']`);
      console.log(menuId, menuItem);
      if (menuItem) {
        $('.cabinet-navigation-list ul').removeClass('active');
        container.addClass('opened');
        return menuItem.addClass('active');
      }
    }
  });
  return $('.cabinet-navigation-list .close').on('click', function(e) {
    return $('.cabinet-navigation-list').removeClass('opened');
  });
};

$(function() {
  initDropMenu();
  initUi();
  initTabs();
  return initMobileMenu();
});
igation-list').removeClass('opened');
    });
  };

  $(function() {
    initDropMenu();
    initUi();
    initTabs();
    return initMobileMenu();
  });

}).call(this);

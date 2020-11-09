(function() {
  var initDropMenu, initTabs, initUi;

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
    return $('.tabs_list li > a').on('click', function(e) {
      var tabId;
      $('.tabs_list li > a').removeClass('active');
      e.preventDefault();
      tabId = $(this).attr('href');
      $('.tabs_item').hide();
      $(this).addClass('active');
      return $('.tabs_content').find(tabId).show();
    });
  };

  $(function() {
    initDropMenu();
    initUi();
    return initTabs();
  });

}).call(this);

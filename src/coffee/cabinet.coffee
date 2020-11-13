initDropMenu = ->
  $('.cabinet-navigation_menu').accordion(
    item: '.menu-drop'
    opener: '.menu-drop'
    content: '.drop-list'
  )

initUi = ->
  $('.tooltipster').tooltipster()
  $('select').select2({
    minimumResultsForSearch: Infinity
  })

  $('.input_tag').tagify()

initTabs = ->
  $('.tabs_list li > a').on 'click', (e) ->
    $('.tabs_list li > a').removeClass('active')
    e.preventDefault()

    tabId = $(this).attr('href')

    $('.tabs_item').hide()
    
    $(this).addClass('active')
    $('.tabs_content').find(tabId).show()

initMobileMenu = ->
  $('.menu-drop-mob').on 'click', (e) ->
    self = $(this)
    container = $('.cabinet-navigation-list')
    menuId = self.data('menu')

    if menuId
      menuItem = container.find("ul[data-item='#{menuId}']")
      console.log menuId, menuItem

      if menuItem
        $('.cabinet-navigation-list ul').removeClass('active')
        container.addClass('opened')
        menuItem.addClass('active')


  $('.cabinet-navigation-list .close').on 'click', (e) ->
    $('.cabinet-navigation-list').removeClass('opened')

    
$ ->
  initDropMenu()
  initUi()
  initTabs()
  initMobileMenu()

initMenu = ->
  $('.menu_btn').on 'click', ->
    $('body').toggleClass('menu-opened')

  $(document).mouseup (e) ->
    menu = $('.navigation, .menu_btn')
    if !menu.is(e.target) and menu.has(e.target).length == 0
      $('body').removeClass 'menu-opened'
    return

initAccordion = ->
  $('.faq').accordion()

$ ->
  initMenu()
  initAccordion()

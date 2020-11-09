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

$ ->
  initDropMenu()
  initUi()
  initTabs()

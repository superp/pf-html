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

formatState = (state) ->
  if !state.id
    return state.text
  baseUrl = '/dist/assets/images/flags'
  $state = $('<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span>' + state.text + '</span>' + '</span>')
  $state

initSelect = ->
  $('.phone_input select').select2({
    templateResult: formatState,
    templateSelection: formatState,
    minimumResultsForSearch: Infinity
  })

initCarousel = ->
  $('.brands').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  })

# ---
# generated by js2coffee 2.2.0

$ ->
  initMenu()
  initAccordion()
  initSelect()
  initCarousel()

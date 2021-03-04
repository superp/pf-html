$ = jQuery

$.fn.accordion = (options = {}) ->
  @each ->
    self = $(this)
    data = self.data('accordion')
    self.data('accordion', new Accordion(this, options))  unless data
    data[options]()  if typeof options is 'string'

class Accordion
  constructor: (@dom, options = {}) ->
    defaults =
      item: '.faq-item'
      opener: '.faq-item_title'
      content: '.faq-item_content'
      activeClass: 'active'

    @options = $.extend defaults, options

    @_setup()

  _setup: ->
    @wrapper = $(@dom)
    @opener = @wrapper.find(@options.opener)
    @containers = @wrapper.find(@options.content)
    @items = @wrapper.find(@options.item)

    @_initControls()

  _initControls: ->
    self = this

    @opener.off('click').on 'click', ->
      self._activate(this)

      false

  _activate: (opener) ->
    item = $(opener).closest(@options.item)
    content = item.find(@options.content)

    @containers.not(content).slideUp(300)
    @items.not(item).removeClass(@options.activeClass)

    content.slideToggle(300)
    item.toggleClass(@options.activeClass)


window.Accordion = Accordion

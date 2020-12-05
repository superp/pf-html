(function() {
  var $, Accordion;

  $ = jQuery;

  $.fn.accordion = function(options = {}) {
    return this.each(function() {
      var data, self;
      self = $(this);
      data = self.data('accordion');
      if (!data) {
        self.data('accordion', new Accordion(this, options));
      }
      if (typeof options === 'string') {
        return data[options]();
      }
    });
  };

  Accordion = class Accordion {
    constructor(dom, options = {}) {
      var defaults;
      this.dom = dom;
      defaults = {
        item: '.faq_item',
        opener: '.faq_item_title',
        content: '.faq_item_content',
        activeClass: 'active'
      };
      this.options = $.extend(defaults, options);
      this._setup();
    }

    _setup() {
      this.wrapper = $(this.dom);
      this.opener = this.wrapper.find(this.options.opener);
      this.containers = this.wrapper.find(this.options.content);
      this.items = this.wrapper.find(this.options.item);
      return this._initControls();
    }

    _initControls() {
      var self;
      self = this;
      return this.opener.off('click').on('click', function() {
        self._activate(this);
        return false;
      });
    }

    _activate(opener) {
      var content, item;
      item = $(opener).closest(this.options.item);
      content = item.find(this.options.content);
      this.containers.not(content).slideUp(300);
      this.items.not(item).removeClass(this.options.activeClass);
      content.slideToggle(300);
      return item.toggleClass(this.options.activeClass);
    }

  };

  window.Accordion = Accordion;

}).call(this);

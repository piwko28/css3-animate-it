/*
 * CSS3 Animate it
 * Copyright (c) 2014 Jack McCourt
 * https://github.com/kriegar/css3-animate-it
 * Version: 0.1.0
 * 
 * I utilise the jQuery.appear plugin within this javascript file so here is a link to that too
 * https://github.com/morr/jquery.appear
 *
 * I also utilise the jQuery.doTimeout plugin for the data-sequence functionality so here is a link back to them.
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    var appearedFn = function() {
      return $(this).is(':appeared');
    };
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(appearedFn);

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':'].appeared = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(jQuery);
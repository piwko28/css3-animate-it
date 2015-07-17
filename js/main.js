$(document).ready(function() {

  var parents = ".animatedParent";
  var animations = [
    'bounceIn',
    'bounceInDown',
    'bounceInRight',
    'bounceInUp',
    'bounceInLeft',
    'fadeInDownShort',
    'fadeInUpShort',
    'fadeInLeftShort',
    'fadeInRightShort',
    'fadeInDown',
    'fadeInUp',
    'fadeInLeft',
    'fadeInRight',
    'fadeIn',
    'growIn',
    'shake',
    'shakeUp',
    'rotateIn',
    'rotateInUpLeft',
    'rotateInDownLeft',
    'rotateInUpRight',
    'rotateInDownRight',
    'rollIn',
    'wiggle',
    'swing',
    'tada',
    'wobble',
    'pulse',
    'lightSpeedInRight',
    'lightSpeedInLeft',
    'flip',
    'flipInX',
    'flipInY'
  ];

  if($.device.nonMobile) {

    /* AUTO ADDED ANIMATIONS -- OPTIONAL -- START */
    var selectors = {
      'h1' : 'fadeInDown',
      'h2' : {
        animation : 'fadeInRight',
        delay : 750
      }
    };
    var selector, elements;
    function updateAnimatedElements() {
      for(selector in selectors) {
        elements = $(selector, parents);
        elements.addClass("animated");
        if(typeof selectors[selector] === 'string') {
          elements.addClass(selectors[selector]);
        } else if(typeof selectors[selector] === 'object') {
          if(selectors[selector].hasOwnProperty('animation')) {
            elements.addClass(selectors[selector].animation);
          }
          if(selectors[selector].hasOwnProperty('delay')) {
            elements.addClass('delay-' + selectors[selector].delay);
          }
        }
      }
    }
    updateAnimatedElements();
    /* AUTO ADDED ANIMATIONS -- OPTIONAL -- END */

    $(parents).appear();

    $(document.body).on('appear', parents, function(e, $affected){
      $(this).find('.animated').addClass('go');
    });

    $(document.body).on('disappear', parents, function(e, $affected) {
      if(!$(this).hasClass('animateOnce')){
        $(this).find('.animated').removeClass('go');
      }
    });

    $.force_appear();

  } else {

    var items = $(".animated", parents);
    items.removeClass("animated");
    $.each(animations, function(i, name) {
      items.removeClass(name);
    });

  }

});
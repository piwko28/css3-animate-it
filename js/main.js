$(document).ready(function() {

  var parents = ".animatedParent";

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

});
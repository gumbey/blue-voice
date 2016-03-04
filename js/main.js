$(function(){
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function(){
    toggleNav();
  })
});

function toggleNav(){
  if($('.site-wrapper').attr('data-state') == 'slide-close'){
    // Show Nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');
  }else{
    // Hide Nav when open
    $('.site-wrapper').attr('data-state', 'slide-close');
  }
}

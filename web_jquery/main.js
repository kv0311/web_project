$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  })

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').animate({
      color:'#EFEFEF',
      backgroundColor:'#303030',
      fontSize:'18px'
    },200);
  })
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').animate({
      color:'#C3FF00',
      backgroundColor:'#535353',
      fontSize:'24px'
    },200);
  })
  $('.product-photo').on('mouseenter',(event)=>{
      $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave',()=>{
    $(event.currentTarget).removeClass('photo-active')
  })
}); 

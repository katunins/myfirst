jQuery(document).ready(function() {


  $('.accord-title').on('click', function() {
    var parents = $(this).parents('.accord-wrap');
    parents.find('.accord-block').slideToggle();
    parents.toggleClass('active');

  });


  $('.humb').on('click', function() {
    $('body').addClass('active');
  });


  $('.menu-mob__close, .menu-mob_link').on('click', function() {
    $('body').removeClass('active');
  });
  
  
  $('.menu__item').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });


  $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 84 ) {
      $(".header-mob__wrap").addClass("active");
    }
    if( scrolled <= 84 ) {
      $(".header-mob__wrap").removeClass("active");
    }
  });
  $('body').on('click', '.animated-link', function(e) {
    if($(window).width() > 992){
      var fixed_offset = 0;
    }else{
      var fixed_offset = 64;
    }
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
    e.preventDefault();
  });
  
  
  // dis footer
  
  if($('.footer-wrap').length > 0) {
    
    var $element = $('.footer-wrap');
    let counter = 0;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + $(window).height();
      //Если скролл до конца елемента
      //var offset = $element.offset().top + $element.height();
      //Если скролл до начала елемента
      var offset = $element.offset().top;

      if (scroll > offset) {
        $('.anim-block').fadeOut(300);
      } else {
        $('.anim-block').fadeIn(300);

      }
    });
  }
});


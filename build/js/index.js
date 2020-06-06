jQuery(document).ready(function() {

  //
  // /* helicon */
  //
  // $.each($('.slider-reviwes'), function() {
  //
  //   $(this).slick({
  //     slidesToScroll: 1,
  //     slidesToShow: 1,
  //     arrows: true,
  //     dots: false,
  //     infinite: true,
  //     swipeToSlide: true,
  //     prevArrow: '<a href="javascript:void(0);" class="prev-button"></a>',
  //     nextArrow: '<a href="javascript:void(0);" class="next-button"></a>',
  //     appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
  //
  //   });
  // });
  //
  //
  // /// formstyler
  //
  // $('.checkbox').styler();
  //
  // ///
  //
  // /* menu mob*/
  //
  // $('.humb').on('click', function() {
  //   $('body').addClass('active');
  // });
  //
  //
  // $('.menu-mob__close, .menu-mob_link').on('click', function() {
  //   $('body').removeClass('active');
  // });
  // $('.modal-open').modal('show');
  // /**/
  //
  // /// mask
  // $(function() {
  //   $('.phone').mask('+7 (999) 999 99 99');
  // });
  //
  //
  // $('.video-block').magnificPopup({
  //   type: 'iframe',
  //   closeOnContentClick: true,
  //   mainClass: 'mfp-img-mobile',
  //   image: {
  //     verticalFit: true,
  //   },
  // });
  //
  // $('body').on('click', '.animated-link', function(e) {
  //   var fixed_offset = 100;
  //   $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
  //   e.preventDefault();
  // });
  //
  //
  // /**/
  //
  // $(window).on("scroll", function () {
  //   var scrolled = $(this).scrollTop();
  //   if( scrolled > 49 ) {
  //     $(".header-wrap").addClass("active");
  //   }
  //   if( scrolled <= 49 ) {
  //     $(".header-wrap").removeClass("active");
  //   }
  // });
  //
  //
  //
  // /// mask
  // $(function () {
  //   $(".phone").mask("+7 (999) 999 99 99");
  // });
  // ///
  //
  // var $carousel = $('.slider-product');
  //
  // $.each($($carousel), function() {
  //
  // $carousel
  //   .slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     fade: true,
  //     swipeToSlide:true,
  //     touchMove:true,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     prevArrow: '<a href="javascript:void(0);" class="prev-button"></a>',
  //     nextArrow: '<a href="javascript:void(0);" class="next-button"></a>',
  //     appendArrows: $(this).parents('.slider__wrap').find('.container-arrows')
  //   })
  //   .magnificPopup({
  //     type: 'image',
  //     delegate: 'a:not(.slick-cloned)',
  //     closeOnContentClick: false,
  //     tLoading: 'Загрузка...',
  //     mainClass: 'mfp-zoom-in mfp-img-mobile',
  //     image: {
  //       verticalFit: true,
  //       tError: '<a href="%url%">Фото #%curr%</a> не загрузилось.'
  //     },
  // 
  //     gallery: {
  //       enabled: true,
  //       navigateByImgClick: true,
  //       tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counte
  //       preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  //     },
  //     zoom: {
  //       enabled: true,
  //       duration: 300
  //     },
  //     removalDelay: 300, //delay removal by X to allow out-animation
  //     callbacks: {
  //       open: function() {
  //         //overwrite default prev + next function. Add timeout for css3 crossfade animation
  //         $.magnificPopup.instance.next = function() {
  //           var self = this;
  //           self.wrap.removeClass('mfp-image-loaded');
  //           setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
  //         };
  //         $.magnificPopup.instance.prev = function() {
  //           var self = this;
  //           self.wrap.removeClass('mfp-image-loaded');
  //           setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
  //         };
  //         var current = $carousel.slick('slickCurrentSlide');
  //         $carousel.magnificPopup('goTo', current);
  //       },
  //       imageLoadComplete: function() {
  //         var self = this;
  //         setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
  //       },
  //       beforeClose: function() {
  //         $carousel.slick('slickGoTo', parseInt(this.index));
  //       },
  //       elementParse: function(item) {
  //         if(item.el.hasClass("multiple_gallery_video")){
  //           console.log("multiple_gallery_video")
  //           item.type = 'iframe';
  //         }else {
  //           item.type = 'image';
  //         }
  //         console.log(item); // Do whatever you want with "item" object
  //       }
  //     }
  //   });
  //
  // });
  //
  // objectFitImages('img-video');
  //



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
    var fixed_offset = 64;
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
    e.preventDefault();
  });
  
  
  // dis footer

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
    }else {
      $('.anim-block').fadeIn(300);

    }
  });
  

});


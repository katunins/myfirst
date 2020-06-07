jQuery (document).ready (function () {
  //scroll

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test (
      navigator.userAgent
    )
  ) {
  } else {
    function findNextSection (direction) {
      allSections = document.querySelectorAll ('section');
      result = false;
      for (i = 0; i < allSections.length; i++) {
        if (allSections.item (i).classList.contains ('current')) {
          if (direction < 0 && i > 0) result = allSections.item (i - 1);
          if (direction > 0 && i < allSections.length - 1)
            result = allSections.item (i + 1);
          break;
        }
      }
      return result;
    }

    var scrollMove = true;

    window.onload = function () {
      if (window.addEventListener)
        window.addEventListener ('DOMMouseScroll', mouse_wheel, false);
      window.onmousewheel = document.onmousewheel = mouse_wheel;
    };
    var mouse_wheel = function (event) {
      if (false == !!event) event = window.event;
      var direction =
        (event.wheelDelta ? event.wheelDelta / 120 : event.detail / -3) ||
        false;

      if (scrollMove) {
        current = document.querySelector ('.current');
        next = findNextSection (direction);

        if (next != false) {
          current.classList.remove ('current');
          next.classList.add ('current');

          $ ('html, body').animate ({scrollTop: $ (next).offset ().top + 'px'});

          //задержка до следующего опроса колеса
          scrollMove = false;
          setTimeout (() => {
            scrollMove = true;
          }, 650);
        }
      }
    };
  }

  //scroll

  //animation
  document.addEventListener ('mousemove', function (e) {
    const elem = document.querySelectorAll ('.animation-on');
    elem.forEach (element => {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depthX = 5 - _mouseX * 0.005; //коэффициент
      let _depthY = 5 - _mouseY * 0.005; //коэффициент
      
      //изменяем координаты и тень
      element.style.transform =
        'translate(' + _depthX + 'px,' + _depthY + 'px)';
      element.style.filter =
        'drop-shadow(' + _depthX + 'px ' + _depthY + 'px 4px grey)';
    });
  });

  //animation

  $ ('.accord-title').on ('click', function () {
    var parents = $ (this).parents ('.accord-wrap');
    parents.find ('.accord-block').slideToggle ();
    parents.toggleClass ('active');
  });

  $ ('.humb').on ('click', function () {
    $ ('body').addClass ('active');
  });

  $ ('.menu-mob__close, .menu-mob_link').on ('click', function () {
    $ ('body').removeClass ('active');
  });

  $ ('.menu__item').on ('click', function () {
    $ (this).addClass ('active').siblings ().removeClass ('active');
  });

  $ (window).on ('scroll', function () {
    var scrolled = $ (this).scrollTop ();
    if (scrolled > 84) {
      $ ('.header-mob__wrap').addClass ('active');
    }
    if (scrolled <= 84) {
      $ ('.header-mob__wrap').removeClass ('active');
    }
  });
  $ ('body').on ('click', '.animated-link', function (e) {
    //scrool
    current = document.querySelector ('.current');
    next = document.querySelector ('#' + $ (this).attr ('href').split ('#')[1]);
    current.classList.remove ('current');
    next.classList.add ('current');
    //scrool

    if ($ (window).width () > 992) {
      var fixed_offset = 0;
    } else {
      var fixed_offset = 64;
    }
    $ ('html,body')
      .stop ()
      .animate ({scrollTop: $ (this.hash).offset ().top - fixed_offset}, 1000);
    e.preventDefault ();
  });

  // dis footer

  if ($ ('.footer-wrap').length > 0) {
    var $element = $ ('.footer-wrap');
    let counter = 0;
    $ (window).scroll (function () {
      var scroll = $ (window).scrollTop () + $ (window).height ();
      //Если скролл до конца елемента
      //var offset = $element.offset().top + $element.height();
      //Если скролл до начала елемента
      var offset = $element.offset ().top;

      if (scroll > offset) {
        $ ('.anim-block').fadeOut (300);
      } else {
        $ ('.anim-block').fadeIn (300);
      }
    });
  }
});

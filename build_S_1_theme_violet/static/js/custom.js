"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fired = false;
window.addEventListener('scroll', loadWithDelay, false);
window.addEventListener('mousemove', loadWithDelay, false);
document.querySelector('.js-btn-listener').addEventListener('click', function () {
  console.log('Hello!');
});

function loadWithDelay() {
  if (fired === false) {
    fired = true;
    setTimeout(function () {
      // fancybox
      if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox({
          loop: true,
          animationEffect: 'zoom-in-out',
          closeClickOutside: true
        });
      }
    }, 100);
  }
}

$(document).ready(function () {
  setTimeout(function () {
    if ('.js-news-preview-slider'.length) {
      $('.js-news-preview-slider').on('init', function () {
        $(this).removeClass('u-fix-height');
      }).slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
          breakpoint: 567,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: true
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            arrows: true,
            dots: true
          }
        }]
      });
    } // Form validate call


    $('.wpcf7-form').validate(validateParams);
    $('#commentform').validate(validateParams); // Header menu hide

    headerMenuHide.initialize();
  }, 2000);
  /* Slick needs no get Reinitialized on window Resize after it was destroyed */

  $(window).on('load resize orientationchange', function () {
    var $carousel = $('.js-breadcrumbs-slider');
    /* Initializes a slick carousel only on mobile screens */

    if ($(window).innerWidth() >= 768 && $carousel.hasClass('slick-initialized')) {
      $carousel.slick('unslick');
    } else if ($(window).innerWidth() < 768 && !$carousel.hasClass('slick-initialized')) {
      $carousel.on('init', function () {
        $(this).removeClass('u-fix-height');
      }).slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        mobileFirst: true,
        variableWidth: true,
        infinite: false
      });
    }
  }); // header dropdown on hover (desktop)

  $('.js-header .js-header-drop-btn').on('js-menu-btn-collapse', function (event) {
    if (window.innerWidth >= 1024) {
      $('.js-header .collapse').removeClass('in');
      $(this).parent().siblings('.collapse').addClass('in');
      event.stopPropagation();
      event.preventDefault();
    }
  });
  $('body').AddClassAnimation();
  $(window).on('load resize orientationchange', function () {
    if ($(window).innerWidth() <= 1024) {
      toggleMenuItem();
    }
  }); // header-fix on scroll

  (function () {
    var headerFix = document.querySelector('.js-header');

    window.onscroll = function () {
      if (window.pageYOffset > 50) {
        headerFix.classList.add('__js-header-fix___');
      } else {
        headerFix.classList.remove('__js-header-fix___');
      }
    };
  })(); // for header modal


  $('.js-modal-btn').click(function () {
    $(this).addClass('is-active'); // show opened dropdown on mobile

    setTimeout(function () {
      $('.js-header-drop-btn.is-active').parent().addClass('open');
    }, 100);
  });
  $(document).on('hide.bs.modal', '.js-modal-main', function () {
    $('.js-modal-btn').removeClass('is-active'); // hide opened dropdown on mobile after modal hides

    setTimeout(function () {
      $('.js-header-drop-btn.is-active').parent().removeClass('open');
    }, 200);
  });
  $(document).on('show.bs.modal', '.js-modal-main', function () {
    $('html, body').addClass('modal-noscroll');
  });
  $(document).on('hidden.bs.modal', '.js-modal-main', function () {
    $('html, body').removeClass('modal-noscroll');
  });
  $(document).on('show.bs.modal', '.js-modal-full', function () {
    $('html, body').addClass('modal-noscroll-full');
  });
  $(document).on('hidden.bs.modal', '.js-modal-full', function () {
    $('html, body').removeClass('modal-noscroll-full');
  });
  $('.modal').on('show.bs.modal', function () {
    var docHeight = $(document).height(),
        windowHeight = $(window).height(),
        docWidth = $(document).outerWidth(),
        windowWidth = $(window).outerWidth(),
        widthScroll = windowWidth - docWidth;

    if (docHeight > windowHeight) {
      // fix-scroll
      $('body').css('paddingRight', widthScroll);
    } else {
      $('body').css('paddingRight', '0');
    }
  }).on('hidden.bs.modal', function () {
    $('body').css('paddingRight', '0');
  });
}); // scroll add class

(function ($) {
  var addClassAnimation = {
    elementAnim: '.js-animate',
    classAnim: 'is-animated'
  };

  addClassAnimation.add = function () {
    var element = this.elementAnim;
    var addClass = this.classAnim;
    $(element).each(function () {
      var $this = $(this);
      var offsetEl = $this.offset();

      if (offsetEl.top <= $(document).scrollTop() + $(window).height() / 1.3) {
        $this.addClass(addClass);
      }
    });
  };

  $.fn.AddClassAnimation = function (options) {
    if (options && _typeof(options) === 'object') {
      $.extend(addClassAnimation, options);
    }

    var $this = $(this);
    addClassAnimation.add($this);
    $(window).on('scroll', function () {
      addClassAnimation.add($this);
    });
    return this;
  };
})(jQuery); // API fakeStore


var btn = document.getElementById('btn').addEventListener('click', getPost);
var con = 0;
var div = document.getElementById('cardDiv');

function getPost() {
  fetch('https://fakestoreapi.com/products').then(function (res) {
    return res.json();
  }).then(function (post) {
    for (var index = 0; index < 8; index++) {
      div.innerHTML += "<div class=\"__cl-grid__c-12___ __cl-grid__c-to-x-6___ __cl-grid__c-sm-4___ __cl-grid__c-md-4___ __cl-grid__c-xmd-3___\">\n                    <div class=\"__cl-c-slot___\" tabindex=\"0\"><a class=\"__cl-c-slot__img-box___\" href=\"#\" aria-label=\"slot picture\"><img class=\"lazyload\" src=\"static/img/general/cork-slot.png\" data-src=\"".concat(post[con].image, "\" alt=\"\"/></a>\n                        <div class=\"__cl-c-slot__content___\">\n                            <div class=\"__cl-c-slot__title___\">").concat(post[con].title, "</div>\n                            <div class=\"__cl-c-slot__text___\">").concat(post[con].category, "</div>\n                            <div class=\"__cl-c-slot__value___\">\n                                <div class=\"__cl-c-slot__price___\">Rp ").concat(post[con].price, "</div>\n                                <div class=\"__cl-c-slot__label___\"></div>\n                            </div>\n                        </div>\n                        <div class=\"__cl-c-slot__hov-box___\">\n                            <div class=\"__cl-c-slot__btn-box___\"><a class=\"__cl-c-btn___ __cl-c-slot__btn-play___\" href=\"#\">Add to cart</a></div>\n                            <div class=\"__cl-c-slot__in___\">\n                                <div class=\"__cl-c-slot__text-box___\">\n                                    <div class=\"__cl-c-slot__line___\">   <a class=\"__cl-c-slot__item___ __cl-c-slot__icon-share___\" href=\"#\" aria-label=\"\"> <span class=\"__cl-c-slot__key___\">Share</span></a><a class=\"__cl-c-slot__item___ __cl-c-slot__icon-like___\" href=\"#\" aria-label=\"\"> <span class=\"__cl-c-slot__key___\">Like</span></a></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ");
      con += 1;
    }

    console.log('Hello!');
  })["catch"](function (error) {
    console.log(error);
  });
} // polifil for .remove() es6


(function () {
  var arr = [window.Element, window.CharacterData, window.DocumentType];
  var args = [];
  arr.forEach(function (item) {
    if (item) {
      args.push(item.prototype);
    }
  }); // (function (arr) {

  (function () {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }

      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          this.parentNode.removeChild(this);
        }
      });
    });
  })(args);
})(); // validate form


var validateParams = {
  rules: {
    author: 'required',
    comment: {
      required: true,
      minlength: 10
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    author: $('[for="author"]').data('error'),
    comment: $('[for="comment"]').data('error'),
    email: $('[for="email"]').data('error')
  },
  submitHandler: function submitHandler(form) {
    var loader = '<div class="c-loader" style="margin-top: 20px"></div>';
    $('#form-message').remove();
    $('.wpcf7-form').append(loader);
    $('#commentform').append(loader);
    setTimeout(function () {
      $('.c-loader').remove();
      $('.wpcf7-form [name]').val('');
      var message = "<div id=\"form-message\" style=\"display: block; text-align: left; margin-top: 15px\"> ".concat($('#submit_button').data('send'), " </div>");

      if ($('#form-message').length === 0) {
        $('.wpcf7-form').append(message);
        $('#commentform').append(message);
      }
    }, 700);
  }
}; // Toggle menu item

function toggleMenuItem() {
  var menuList = document.querySelector('.js-menu-list'),
      activeItem = document.querySelector('.is-active');
  activeItem.parentNode.classList.add('is-hover');

  function clearItemHover() {
    var hoverElements = document.querySelectorAll('.is-hover');
    hoverElements.forEach(function (item) {
      item.classList.remove('is-hover');
    });
  }

  menuList.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('js-menu-link') || target.classList.contains('js-menu-btn-collapse')) {
      clearItemHover();
      target.parentNode.classList.add('is-hover');
    }
  });
} // Header menu hide


var headerMenuHide = function ($) {
  var initialized = 0;
  var defaults = {
    targetSelector: '.js-header .collapse'
  };
  var settings = $.extend({}, defaults, {} || {});

  var initialize = function initialize(params) {
    if (initialized) {
      return;
    }

    initialized = 1;
    settings = $.extend({}, defaults, params || {});
    $('.js-header .collapse').each(function () {
      var hoverTimeout;
      var thisLink = $(this).attr('aria-labelledby');
      $(this).hover(function () {
        clearTimeout(hoverTimeout);
      }, function () {
        var $self = $(this);

        if (window.innerWidth >= 1440 && !idIsHovered(thisLink)) {
          hoverTimeout = setTimeout(function () {
            $self.removeClass('in');
          }, 500);
        }
      });
    });
  };

  var idIsHovered = function idIsHovered(id) {
    return $("".concat(id, ":hover")).length > 0;
  };

  return {
    initialize: initialize
  };
}(jQuery); // scroll to element


function scrollToItem(elem) {
  var el = $(elem).attr('href').slice(1),
      elToScroll = $("#".concat(el)),
      navHeight = 0,
      time = 500,
      gap = 50,
      offsetTop = elToScroll.offset().top,
      totalScroll = offsetTop - navHeight - gap;
  $('body,html').animate({
    scrollTop: totalScroll
  }, time);
  return false;
}
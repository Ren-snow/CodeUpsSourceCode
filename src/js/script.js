
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(function () {
    // loader
    $(function(){
      $(window).on('load',function(){
        // $('.loader').delay(600).fadeOut(600);
        $('.loader').delay(600).slideUp(400);
        // $('.loader-bg').delay(900).fadeOut(800);
        $('.loader-bg').delay(900).slideUp(400);
        $('.loader-fade-in').delay(1600).fadeIn(800);
    });
      setTimeout(function(){
        $('.loader-bg').fadeOut(600);
      },5000);
    });

    // PageTop button
    $(function () {
      $("#js-pagetop").click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 300);
      });
      $(document).ready(function () {
        $('#js-pagetop').hide();
        $(window).scroll(function () {
          if ($(window).scrollTop() > 1) {
            $('#js-pagetop').fadeIn(300).css('display', 'flex')
          } else {
            $('#js-pagetop').fadeOut(300)
          }
        });
      });
    });

    // hamburger
    $('#js-hamburger').click(function () {
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', true)
        $('.js-nav').css('visibility', 'visible')
        $('.js-nav').css('display', 'flex')
        $('.js-header').toggleClass("is-active")
        $('.js-header-top').toggleClass("is-active")
      } else {
        $(this).attr('aria-expanded', false)
        $('.js-nav').css('visibility', 'hidden')
        $('.js-nav').css('display', 'none')
        $('.js-header').toggleClass("is-active")
        $('.js-header-top').toggleClass("is-active")
      }
      $('.js-nav-item').click(function () {
        if ($('#js-hamburger').attr('aria-expanded') == 'true') {
          $('#js-hamburger').attr('aria-expanded', false);
          $('.js-nav').css('visibility', 'hidden')
          $('.js-nav').css('display', 'none')
          $('.js-header').toggleClass("is-active")
          $('.js-header-top').toggleClass("is-active")
        }
      });
    })
  });

});


// img appearance
var box = $('.js-img-wrapper'),
    speed = 400;  

box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    

    color.on('inview', function(){
        if(counter == 0){
          $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});




// Swiper
const swiper = new Swiper('.swiper', {
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  freeMode: true,
  on: {
    init: function () {
      var slides = this.slides;
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = ''; 
      }
    },
    resize: function () {
      var slides = this.slides;
      var slideWidth = window.innerWidth >= 768 ? 333 : 280; 
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = slideWidth + 'px';
      }
    },
  },
  breakpoints: {
    768: {
      // freeMode: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 40,
      initialSlide: 1,
      centeredSlides: true, 
    }
  }
});








jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
    // loader
    // $(function(){
    //   $(window).on('load',function(){
    //     // $('.loader').delay(600).fadeOut(600);
    //     $('.loader').delay(600).slideUp(400);
    //     // $('.loader-bg').delay(900).fadeOut(800);
    //     $('.loader-bg').delay(900).slideUp(400);
    //     $('.loader-fade-in').delay(1600).fadeIn(800);
    // });
    //   setTimeout(function(){
    //     $('.loader-bg').fadeOut(600);
    //   },5000);
    // });



   



    // page-top
    
    $(function(){
      $("#js-pagetop").click(function () {
            $('html, body').animate({
              scrollTop: 0
            }, 300);
      });

      var $jsPagetop = $("#js-pagetop");
      
      $('#js-pagetop').hide();
      $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > 1) {
          $jsPagetop.fadeIn(300);
        } else {
          $jsPagetop.fadeOut(300);
        }
    
        // ページトップボタンの位置を固定
        var $footer = $("#js-footer");
        var pagetopOriginalPosition = $jsPagetop.offset().top;
        var footerPosition = $footer.offset().top;
        if (scrollTop + $(window).height() > footerPosition) {
          var newPosition = footerPosition - $jsPagetop.outerHeight() - 20; 
          $jsPagetop.css({
            position: 'absolute',
            top: newPosition,
            'z-index': 1
          });
        } else {
          $jsPagetop.css({
            position: 'fixed',
            top: 'auto',
            'z-index': 15
          });
        }
      });



    // hamburger
    $('#js-hamburger').click(function () {
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', true)
        $('#js-pagetop').fadeOut(200)
        $('body').toggleClass("is-active")
        $('.js-header').toggleClass("is-active")
        $('.js-header-top').toggleClass("is-active")
      } else {
        $(this).attr('aria-expanded', false)
        $('body').toggleClass("is-active")
        $('.js-header').toggleClass("is-active")
        $('.js-header-top').toggleClass("is-active")
      }
      $('.js-nav-item').click(function () {
        if ($('#js-hamburger').attr('aria-expanded') == 'true') {
          $('#js-hamburger').attr('aria-expanded', false)
          $('body').toggleClass("is-active")
          $('.js-header').toggleClass("is-active")
          $('.js-header-top').toggleClass("is-active")
        }
      });
    })
    $(document).ready(function() {
      $(window).on('resize', function() {
        if ($(window).width() >= 768) {
          $('body').removeClass("is-active")
          $('.js-header').removeClass("is-active")
          $('.js-header-top').removeClass("is-active")
          $('#js-hamburger').attr('aria-expanded', false)
        }
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
    freeMode: true,
    slidesPerView: 'auto',
    speed: 800,
    breakpoints: {
    768: {
      freeMode: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 40,
      initialSlide: 0,
    }
    }
    });
    
    


});

});

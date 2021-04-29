new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
        
        
    },
    autoplay: true,
    breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 100
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 100
      
        },
    },
    
});
var btn_prev = document.querySelector('.prev-arrow')
var btn_next = document.querySelector('.next-arrow')
var images = document.querySelectorAll('.pengi__mac .pengi__slider img')
let tab = document.querySelectorAll ('.pengi__navigation ul li')
var i = 0;

var timer = 0;
        btn_next.onclick = function sliderRight(){
         images[i].style.opacity = 0;
         i = i + 1;    
         if ( i >= images.length) {
             i = 0;
         }
         images[i].style.opacity = 1;
     }
     btn_prev.onclick = function sliderLeft(){
        images[i].style.opacity = 0;
        i = i - 1
        if ( i < 0) {
            i = images.length -1;
        }
        images[i].style.opacity = 1;

        
    }
    $(document).ready(function(){
        $('.promo__burger').click(function(event){
            $('.nav').toggleClass('nav_active');
            $('.promo__burger').toggleClass('promo__burger_active');

            $('.nav_list').toggleClass('nav_list_active');
            $('body').toggleClass('lock');
        });
    });
    $('.button').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    })
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation').fadeOut('slow');
    });
    function valideForms(form) {
        $(form).validate({
            rules : {
                name: "required",
                phone: "required",
                email: {
                   required: true,
                   email: true
                }
            }, 
            messages: {
                name: "Пожалуйста введите свое имя",
                phone: "Введите свой номер телефона",
                email: {
                  required: "Пожалуйста введите свою почту",
                  email: "Неправильно введен адресс почты"
                }
              }
          });
      };

      valideForms('.modal__form');
$('input[name=phone]').mask("+7 (999) 999-9999");

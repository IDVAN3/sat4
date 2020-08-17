'use strict'

$(document).ready(function () {

  $('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    $('.header__link').click(function(){
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock');
    });
	});
    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '"');
            }
        });
    }
    ibg();
    // end ibg

    // Прокрутка вверх
    $(window).scroll(function () {
        let scr_top = $(window).scrollTop();
        scr_top > 100 ? $('.js-up').fadeIn(300) : $('.js-up').fadeOut(300);
    });
    $('.js-up').click(function () {
        $('html, boud').animate({ scrollTop: 0 }, 300);
    });
    // end Прокрутка вверх

    // попап
    function disableScrolling(){
      var x=window.scrollX;
      var y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }
    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function (i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
            disableScrolling();
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
        enableScrolling();
    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
          {
            $('.js-popup').fadeOut(300);
            enableScrolling();
          }
    });
    // end попап
    let $headerTop = $(".header-top");
      $(window).on("scroll", function(){
        if ($(window).scrollTop() >= 2){
          $headerTop.addClass('active');
        }
        else{
          $headerTop.removeClass('active');
        }
      });
    //slider 
    $('.wrap-links').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive:[
          {
              breakpoint: 480,
              settings:{
                  slidesToShow: 1,
              }
          },
        ]
      });

      $('.wrapper-reviews-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
          {
            breakpoint: 1050,
            settings:{
                slidesToShow: 2,
                arrows: true,
            }
          },
          {
              breakpoint: 900,
              settings:{
                  slidesToShow: 1,
              }
          },
        ]
      });

      $('.slider-about').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
          {
              breakpoint: 1090,
              settings:{
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 900,
              settings:{
                  slidesToShow: 2,
              }
          },
          {
            breakpoint: 600,
            settings:{
                slidesToShow: 1,
            }
        }
      ]
      });
      
    //end slider



    // input range start
  let range = document.getElementById("myRange");
  let rangeDate = document.getElementById("rangeDate");
  let output = document.getElementById("value");
  let valueDate = document.getElementById("valueDate");


  output.innerHTML = range.value;
  valueDate.innerHTML = rangeDate.value;

  // Update the current range value (each time you drag the slider handle)
  range.oninput = function() {
      output.innerHTML = this.value;
  }

  rangeDate.oninput = function() {
    valueDate.innerHTML = this.value;
  }

  function roundTo500(num) {
    return Math.round(num/500)*500;
}


  // ограничение на ввод
  $('#num2').change(function(){
		if (+$(this).attr('max') < $(this).val()) {
      $(this).val($(this).attr('max'));
      getrangeDateQuantity();
      
    }
    if (+$(this).attr('min') > $(this).val()) {
      $(this).val($(this).attr('min'));
      getrangeDateQuantity();
		}
  });
  $('#num1').change(function(){
		if (+$(this).attr('max') < $(this).val()) {
      $(this).val($(this).attr('max'));
      getRange();
    }
    if (+$(this).attr('min') > $(this).val()) {
      $(this).val($(this).attr('min'));
      getRange();
		}
  });
  $('#num2').change(function(){
    getrangeDateQuantity();
  });
  $('#num1').change(function(){ // вешаем обработчик на все инпуты с атрибутом pack
    var val = ~~this.value || 0; // получаем значение
    var pack = 500; 
    if(val%pack != 0){
        this.value = roundTo500(this.value); 
        getRange();
    }
});
  // scroll anchor
  let heightHeader = $(".header").height()+40;
  $('.header__list li a').click(function(){
    let element = $(this).attr('href');
    let dist = $(element).offset().top-heightHeader;

    $('html, body').animate({'scrollTop': dist}, 500);

    return false;
  })
  function windowWidth(){
    if ($(window).width() <= '640'){
      $('.section-main').css("padding-top", heightHeader-40);
    }
    else{
      $('.section-main').css("padding-top", heightHeader);
    }
  };
  windowWidth();
});









// toggle css position buttons

$(function() {

    let countButtons = $(".wrapper-button-main").length;
    let buttons = $(".buttons");
    if(countButtons > 1){
        buttons.css("justify-content", "center");
    }
    else{
        buttons.css("justify-content", "flex-start");
    }

})

//end toggle

// toggle btn

let toggle1 = $(".btn-toggle1");
let toggle2 = $(".btn-toggle2");

let takeZaim = $(".take-zaym");
let notZaim = $(".not-zaym");

toggle1.click(function(){
  toggle1.addClass('active');
  toggle2.removeClass('active');

  takeZaim.css("display", "block");
  notZaim.css("display", "none");
});
toggle2.click(function(){
  toggle2.addClass('active');
  toggle1.removeClass('active');

  notZaim.css("display", "block");
  takeZaim.css("display", "none");
});

let app = document.querySelector('.app')
let pc = document.querySelector('.pc-flex')
let title = document.createElement('div');

app.appendChild(title);


function windowSize(){
  if ($(window).width() <= '640'){
    pc.innerHTML ='<div class="zaym-head">Моментальное погашение</div> <div class="wrapper-block"> <div class="wrapper-sum"> <h3 class="sum__title">Сумма займа</h3> <div class="wrapper-input-number"> <span id="value" class="input-number"></span> <span class="input-number">&#8381;</span> </div> </div> <input type="range"  min="3000" max="15000" value="11500" step="500" class="range" id="myRange"> <div class="prices"> <div class="price">3000 &#8381;</div> <div class="price">15000 &#8381;</div> </div> </div><div class="wrapper-block"> <div class="wrapper-sum"> <h3 class="sum__title">Срок займа</h3><div class="wrapper-input-number"> <span id="valueDate" class="input-number"></span> <span class="input-number">дней</span> </div> </div> <input type="range"  min="7" max="31" value="31" step="1" class="range" id="rangeDate"> <div class="prices"> <div class="price">7 дней</div> <div class="price">31 день</div> </div> </div> <div class="free-zaym"> <div class="free-zaym__left"><div class="first-zaym">Первый займ сроком до 10 дней — <span>БЕСПЛАТНО</span> </div> </div> <div class="free-zaym__right"> <img src="img/shape.svg" alt=""> <div class="shape"> <div class="shape-text">первый займ</div> <div class="shape-percent">0%</div> </div> </div> </div> <a href="#" class="take-many">Получить деньги</a>';
  } else {
    pc.innerHTML = '';
  }
};


windowSize();

// $(window).resize(windowSize); // при изменении размеров



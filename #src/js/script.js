// функция определения поддержки WebP
function testWebP(callback) {

  var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
  
testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});


// слайдер на первом экране
$('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="img/left-arrow.png" alt="" class="header-slider__left-arrow">',
    nextArrow:'<img src="img/right-arrow.png" alt="" class="header-slider__right-arrow">',
    dots:true
  });

//слайдер в разделе opinions 
$('.opinions-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="img/left-arrow.png" alt="" class="opinions-slider__left-arrow">',
    nextArrow:'<img src="img/right-arrow.png" alt="" class="opinions-slider__right-arrow">',
    dots:true
})

// анимация при скролле
new WOW().init();
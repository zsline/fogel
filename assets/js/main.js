document.querySelector('.menu-btn').addEventListener('click', function(){
    this.classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
});
new Swiper('.result__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.result-next',
      prevEl: '.result-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        647: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        }
      }
});

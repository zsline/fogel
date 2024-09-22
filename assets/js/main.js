document.querySelector('.menu-btn').addEventListener('click', function(){
    this.classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
});


// =============== FAQ ==================

const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(el =>{
  el.firstElementChild.addEventListener('click', function() {
    faqItems.forEach(item =>{
      item.classList.remove('open');
    });
  el.classList.add('open')
  });
});


// ================= SLIDERS ==============
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
new Swiper('.reviews__slider',{
  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  },
});

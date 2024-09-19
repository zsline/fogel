document.querySelector('.menu-btn').addEventListener('click', function(){
    this.classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
})

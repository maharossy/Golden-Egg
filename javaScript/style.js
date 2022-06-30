const  innerTabs = document.querySelector('.tabs'),
       outerTabs = document.querySelector('.tabs__container'), 
       btnMenu = document.querySelectorAll('.tabs__item');
      
window.addEventListener('load', overFlowtabs);
window.addEventListener('resize', overFlowtabs);       

function overFlowtabs() {
    if (innerTabs.offSetWidth > outerTabs.offSetWidth) {
        innerTabs.classList.add('overflow');
    } else {
        innerTabs.classList.remove('overflow');
    }
};


const tabs = document.querySelector('.tabs'),
      menuSlider = document.querySelectorAll('.menu__slider-block');

tabs.addEventListener('click', function(e) {
    if (e.target.classList.contains('tabs__item')) {
        this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active')); 
        e.target.classList.add('active');
    }

    menuSlider.forEach(item => item.classList.remove('show'));

    let tabIndex = e.target.dataset.tab;
    let thisSwiper = document.querySelector(tabIndex);
    thisSwiper.classList.add('show');
});





 

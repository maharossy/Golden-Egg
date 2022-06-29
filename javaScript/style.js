const  innerTabs = document.querySelector('.tabs'),
       outerTabs = document.querySelector('.tabs__container'), 
       btnMenu = document.querySelectorAll('.tabs__item');
      
window.addEventListener('load', overFlowtabs);
window.addEventListener('resize', overFlowtabs);       

btnMenu.forEach(function (item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

function overFlowtabs() {
    if (innerTabs.offSetWidth > outerTabs.offSetWidth) {
        innerTabs.classList.add('overflow');
    } else {
        innerTabs.classList.remove('overflow');
    }
};
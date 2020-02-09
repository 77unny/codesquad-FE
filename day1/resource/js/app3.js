const OPTION = {
    view: 3,
    index: 0
};
const slider = document.querySelector('.slide');
const list = document.querySelector('.slide-list');
const item = document.querySelector('.slide-item');
const items = document.querySelectorAll('.slide-item');
const itemWidth = item.offsetWidth;
const itemHeight = item.offsetHeight;

slider.style.overflow = 'hidden';
slider.style.position = 'relative';
slider.style.width = itemWidth * OPTION.view + 'px';
list.style.position = 'relative';
list.style.width = itemWidth * items.length + 'px';
list.style.height = itemHeight + 'px';

const btnNext = document.querySelector('.next');

btnNext.addEventListener('click', function() {
    const calcRange = itemWidth * (OPTION.index + 1);
    const totalCurruntIndex = OPTION.view + (OPTION.index + 1);
    list.style.left = -calcRange + 'px';
    if(totalCurruntIndex === items.length) return;
    OPTION.index++;
});

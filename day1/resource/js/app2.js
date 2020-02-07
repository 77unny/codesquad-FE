const OPTION = {
    initIndex: 0,
    curruntIndex: 0,
    view: 6
};
const slider = document.querySelector('.slide');
const list = document.querySelector('.slide-list');
const item = document.querySelector('.slide-item');
const items = document.querySelectorAll('.slide-item');
const itemWidth = item.offsetWidth;

slider.style.overflow = 'hidden';
slider.style.position = 'relative';
slider.style.width = itemWidth * OPTION.view + 'px';

list.style.position = 'relative';
list.style.width = itemWidth * (items.length + OPTION.view) + 'px';
list.style.left = -itemWidth * (OPTION.view / 2) + 'px';

const calcChild = () => {
    const count = OPTION.view / 2;
    for (let i = 0; i < count; i++) {
        let firstChild = items[i];
        let lastChild = items[items.length - (i + 1)];
        let firstCloned = firstChild.cloneNode(true);
        let lastCloned = lastChild.cloneNode(true);
        list.appendChild(firstCloned).classList.add('cloned');
        list.insertBefore(lastCloned, list.firstElementChild).classList.add('cloned');
    }
    OPTION.curruntIndex = OPTION.view / 2 - 1
};
calcChild();

const next = () => {
    OPTION.curruntIndex++;
    loop();
    list.style.left = -itemWidth * (OPTION.curruntIndex + 1) + 'px';
    console.log(OPTION.curruntIndex);
    
};
const loop = () => {
    if (OPTION.curruntIndex === items.length) {
        list.style.left = 0;
        OPTION.curruntIndex = 0;
    }
};

const btnNext = document.querySelector('.next');
btnNext.addEventListener('click', next);

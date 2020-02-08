const OPTION = {
    initIndex: 0,
    curruntIndex: 0,
    view: 4
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
list.style.transition = '500ms'
list.style.width = itemWidth * (items.length + (OPTION.view * 2)) + 'px';
list.style.left = -itemWidth * OPTION.view  + 'px';

const calcChild = () => {
    const count = OPTION.view;
    for (let i = 0; i < count; i++) {
        const firstChild = items[i];
        const lastChild = items[items.length - (i + 1)];
        const firstCloned = firstChild.cloneNode(true);
        const lastCloned = lastChild.cloneNode(true);
        list.appendChild(firstCloned).classList.add('cloned');
        list.insertBefore(lastCloned, list.firstElementChild).classList.add(
            'cloned'
        );
    }
    OPTION.curruntIndex = OPTION.view - 1 ;
};
calcChild();

const next = () => {
    OPTION.curruntIndex++;
    loop();
    list.style.left = -itemWidth * (OPTION.curruntIndex + 1) + 'px';
    console.log(OPTION.curruntIndex);
};
const loop = () => {
    if (OPTION.curruntIndex === (items.length + OPTION.view - 1)) {
        setTimeout(function() {
            list.style.left = - itemWidth * OPTION.view  + 'px';;
            OPTION.curruntIndex = OPTION.view - 1;
        }, 500);
    }
};

const btnNext = document.querySelector('.next');
btnNext.addEventListener('click', next);

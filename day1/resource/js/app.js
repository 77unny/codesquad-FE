const ELEMENTS = {
    wrap: '.review-list',
    item: '.review-card',
    prev: '.btn-prev',
    next: '.btn-next'
};
const OPTION = {
    initIndex: 0,
    curruntIndex: 0,
    margin: 20,
    inteval: 5000,
    speed: 500
};
const wrap = document.querySelector(ELEMENTS.wrap);
const item = document.querySelector(ELEMENTS.item);
const itemWidth = document.querySelector(ELEMENTS.item).offsetWidth;
const itemLength = document.querySelectorAll(ELEMENTS.item).length;
const itemMove = itemWidth + OPTION.margin;
wrap.style.position = 'relative';
wrap.style.width = itemMove * itemLength + 'px';
wrap.style.transition = OPTION.speed + 'ms';

const nextIndex = () => {
    if (OPTION.curruntIndex === itemLength - 1)
        return (OPTION.curruntIndex = OPTION.initIndex);
    return OPTION.curruntIndex++;
};
const prevIndex = () => {
    if (OPTION.curruntIndex === OPTION.initIndex) {
        OPTION.curruntIndex = itemLength;
        return OPTION.curruntIndex--;
    }
    return OPTION.curruntIndex--;
};
const prev = () => {
    prevIndex();
    console.log(OPTION.curruntIndex);
    wrap.style.transform =
        'translate3d(-' + itemMove * OPTION.curruntIndex + 'px, 0px, 0px';
};
const next = () => {
    nextIndex();
    console.log(OPTION.curruntIndex);
    wrap.style.transform =
        'translate3d(-' + itemMove * OPTION.curruntIndex + 'px, 0px, 0px';
};
document.querySelector(ELEMENTS.prev).addEventListener('click', prev);
document.querySelector(ELEMENTS.next).addEventListener('click', next);

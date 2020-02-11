class Slider {
    constructor(option) {
        (this.INIT_INDEX = 0),
            (this.CURRUNT_INDEX = option.view),
            (this.SPEED = option.speed),
            (this.VIEW = option.view);
        this.wrapEl = document.querySelector(option.wrapEl);
        this.navEl = document.querySelector(option.navEl);
        this.contentsEl = document.querySelector(option.contentsEl);
        this.itemsEl = document.querySelectorAll(option.itemsEl);
        this.itemEl = document.querySelector(option.itemEl);
        this.prevEl = document.querySelector(option.prevEl);
        this.nextEl = document.querySelector(option.nextEl);
        this.run();
    }
    initStyle() {
        this.wrapEl.style.overflow = 'hidden';
        this.wrapEl.style.position = 'relative';
        this.wrapEl.style.width = this.itemEl.offsetWidth + 'px';
        this.contentsEl.style.position = 'relative';
        this.contentsEl.style.width =
            this.itemEl.offsetWidth * (this.itemsEl.length + this.VIEW * 2) +
            'px';
        this.contentsEl.style.transform =
            'translateX(' + -this.itemEl.offsetWidth * this.VIEW + 'px)';
    }
    cloneEl() {
        const count = this.VIEW;
        for (let i = 0; i < count; i++) {
            const firstChild = this.itemsEl[i];
            const lastChild = this.itemsEl[this.itemsEl.length - (i + 1)];
            const firstCloned = firstChild.cloneNode(true);
            const lastCloned = lastChild.cloneNode(true);
            this.contentsEl.appendChild(firstCloned).classList.add('cloned');
            this.contentsEl
                .insertBefore(lastCloned, this.contentsEl.firstElementChild)
                .classList.add('cloned');
        }
    }
    onNextClick() {
        if (this.CURRUNT_INDEX === this.itemsEl.length + 1) return;
        this.contentsEl.addEventListener('transitionend', () => {
            if (this.CURRUNT_INDEX === this.itemsEl.length + 1) {
                this.contentsEl.style.transition = 'none';
                this.CURRUNT_INDEX = this.VIEW;
                this.contentsEl.style.transform =
                    'translateX(' +
                    -this.itemEl.offsetWidth * this.CURRUNT_INDEX +
                    'px)';
            }
        });
        this.contentsEl.style.transition = this.SPEED + 'ms';
        this.CURRUNT_INDEX++;
        this.contentsEl.style.transform =
            'translateX(' +
            -this.itemEl.offsetWidth * this.CURRUNT_INDEX +
            'px)';
    }
    onPrevClick() {
        if (this.CURRUNT_INDEX === 0) return;
        this.contentsEl.addEventListener('transitionend', () => {
            if (this.CURRUNT_INDEX === 0) {
                this.contentsEl.style.transition = 'none';
                this.CURRUNT_INDEX = this.itemsEl.length;
                this.contentsEl.style.transform =
                    'translateX(' +
                    -this.itemEl.offsetWidth * this.CURRUNT_INDEX +
                    'px)';
            }
        });
        this.contentsEl.style.transition = this.SPEED + 'ms';
        this.CURRUNT_INDEX--;
        this.contentsEl.style.transform =
            'translateX(' +
            -this.itemEl.offsetWidth * this.CURRUNT_INDEX +
            'px)';
    }
    run() {
        console.log('------ 실행');
        this.initStyle();
        this.cloneEl();
        this.nextEl.addEventListener('click', () => {
            this.onNextClick();
        });
        this.prevEl.addEventListener('click', () => {
            this.onPrevClick();
        });
    }
}

const slider = new Slider({
    wrapEl: '.card',
    navEl: '.card-nav',
    contentsEl: '.card-contents',
    itemsEl: '.card-item',
    itemEl: '.card-item',
    prevEl: '.btn-prev',
    nextEl: '.btn-next',
    speed: 500,
    view: 1
});

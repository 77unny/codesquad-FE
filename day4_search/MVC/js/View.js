export default {
    setup(el) {
        this.el = el;
        this.inputElement = el.querySelector('input');
        this.bindEvent();
        return this;
    },
    on(event, handler) {
        this.el.addEventListener(event, handler);
        return this;
    },
    emit(event, data) {
        const evt = new CustomEvent(event, { detail: data });
        this.el.dispatchEvent(evt);
        return this;
    },
    bindEvent() {
        this.inputElement.addEventListener('input', e => {
            const value = e.target.value;
            this.emit('@input', { input: value });
        });
        this.inputElement.addEventListener('keydown', e => {
            const arrowDownKeyCode = 40;
            const arrowUpKeyCode = 38;
            if (e.keyCode === arrowDownKeyCode) this.emit('@keyDown');
            if (e.keyCode === arrowUpKeyCode) this.emit('@keyUp');
        });
    }
};

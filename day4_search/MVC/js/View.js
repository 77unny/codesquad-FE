export default {
    setup(el) {
        this.el = el;
        this.onEvents();
        return this;
    },
    on(event, handler) {
        this.el.addEventListener(event, handler);
        return this;
    },
    emit(event, data) {
        const customEvent = new CustomEvent(event, { detail: data });
        this.el.dispatchEvent(customEvent);
        return this;
    },
    onEvents() {
        this.el.addEventListener('input', e => {
            const value = e.target.value;
            this.emit('@input', { input: value });
        });
        this.el.addEventListener('keydown', e => {
            const arrowDownKeyCode = 40;
            const arrowUpKeyCode = 38;
            if (e.keyCode === arrowDownKeyCode) this.emit('@keyDown');
            if (e.keyCode === arrowUpKeyCode) this.emit('@keyUp');
        });
    }
};

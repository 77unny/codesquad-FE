export default {
    setup(el){
        this.el = el;
        this.inputElement = el.querySelector('input');
        return this;
    },
    on(value){
        console.log(value)
    }
}
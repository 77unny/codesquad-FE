export default {
    setup(el) {
        this.el = el;
        this.resultElement = document.createElement('div');
        this.resultElement.classList.add('result')
        document.querySelector('.search').appendChild(this.resultElement);
    },
    render() {
        console.log(this.resultElement);
    }
};

import { $, $$ } from './Util.js';
import View from './View.js';
import Model from './Model.js';
const tag = '[Controller]';

export default {
    init() {
        console.log(tag);
        View.setup($('.search'))
            .on('@input', e => this.onInput(e.detail.input))
            .on('@keyDown', e => this.onKeyDown())
            .on('@keyUp', e => this.onKeyUp());
    },
    onInput(input) {
        this.onSearch(input);
    },
    onKeyDown() {
        console.log('keydown');
    },
    onKeyUp() {
        console.log('keyup');
    },
    onSearch(input) {
        Model.find(input);
    }
};

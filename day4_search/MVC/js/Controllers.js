import { $, $$ } from './Util.js';
import View from './View.js';
import ResultView from './ResultView.js';
import Model from './Model.js';
const tag = '[Controller]';

export default {
    init() {
        Model.setup();
        ResultView.setup($('.search'));
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
        Model.find().then(data => {
            const words = [];
            data.forEach(word => {
                if (word.slice(0, input.length) === input) {
                    words.push(word);
                }
            });
            this.onSearchResult(words);
        });
    },
    onSearchResult(data) {
        ResultView.render(data);
    }
};

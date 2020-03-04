import { $, $$ } from './Util.js';
import Model from './Model.js';
import View from './View.js';
import ResultView from './ResultView.js';

const tag = '[Controller]';
const JSON_DATA_URL =
    'https://baekcode.github.io/codesquad-FE/day4_search/keyword.json';

export default {
    init() {
        Model.setup(JSON_DATA_URL);
        ResultView.setup($('.search'));
        View.setup($('.search'))
            .on('@input', e => this.onInput(e.detail.input))
            .on('@keyDown', e => this.onKeyDown())
            .on('@keyUp', e => this.onKeyUp());
    },
    onInput(input) {
        const resultList = [];
        Model.getData().forEach(v => {
            if (v.slice(0, input.length) === input) resultList.push(v);
        });
        return ResultView.render(resultList);
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

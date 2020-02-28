import {$,$$} from './Util.js';
import View from './View.js';
const tag = '[Controller]';

export default {
    init() {
        console.log(tag, 'init');
        View.setup($('.search')).on('dd')
    }
};

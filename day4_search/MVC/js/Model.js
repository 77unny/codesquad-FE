const JSON_URL =
    'https://baekcode.github.io/codesquad-FE/day4_search/keyword.json';

export default {
    setup() {
        this.getData();
        return this;
    },
    getData() {
        fetch(JSON_URL)
            .then(res => res.text())
            .then((data) => {
                localStorage.setItem('keyword', data);
            })
    },
    find(input){
        const dataParse = JSON.parse(localStorage.getItem('keyword')).keyword;
        return new Promise((res,req)=>{
            res(dataParse)
        })
    }
};

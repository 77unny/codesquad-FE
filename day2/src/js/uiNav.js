class NavUI {
    constructor(properties) {
        this.properties = properties;
    }
    render() {
        const navLI = this.properties.reduce((acc,cur)=>{
            return acc += `<li>${cur}</li>`;
        },'');
        return `<div class="card-nav"><ul>${navLI}</ul></div>`;
    }
}

export default NavUI;

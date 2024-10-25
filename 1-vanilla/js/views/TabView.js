import View from "./View.js";
import {qs} from "../helpers.js";


export default class TabView extends View{
    constructor(props){
        super(qs("#tab-view"));

        // TODO 동적으로 구현
        this.template = new Template();
    }

    show() {
        this.element.innerHTML = this.template.getTabList();

        super.show();
    }

}

class Template {
    getTabList() {
        return `
            <ul></ul>
        `;
    }
}
import View from "./View.js";
import {delegate, qs} from "../helpers.js";

export default class keywordListView extends View{
    //외부에서 element를 주입 받도록 한다.
    constructor(element = qs("#keyword-list-view"), template = new Template()){
        super(element);

        this.template = template;
        this.bindEvents();
    }
    show(data = []) {
        console.log(data);
        this.element.innerHTML = data.length > 0
            ? this.template.getList(data)
            : this.template.getEmptyMessage();
        super.show();
    }

    bindEvents() {
        delegate(this.element, "click", "li", event => this.handleClick(event));
    }
    handleClick(event) {
        const value = event.target.dataset.keyword;
        console.log(event.target.dataset.keyword);
        this.emit("@click", {value});
    }
}

class Template {

    getList(data = []) {
        return `
            <ul class="list">
                ${data.map(this._getItem).join("")}
            </ul>
        `;
    }

    getEmptyMessage() {
        return `
        <div class="empty-box">추천 검색어가 없습니다.</div>
        `;
    }

    _getItem({id, keyword}) {
        return `
            <li data-keyword=${keyword}>
                <span class="number">${id}</span>
                    ${keyword}
            </li>
        `;
    }
}

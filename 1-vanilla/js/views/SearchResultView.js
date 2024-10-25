import View from "./View.js";
import {qs} from "../helpers.js";

const tag = "[SearchResultView]";

export default class SearchResultView extends View {
    constructor() {
        super(qs("#search-result-view"));

        // dom을 만드는 용도의 template함수
        this.template = new Template();
    }

    show(data = []) {
        this.element.innerHTML = data.length > 0
            ? this.template.getList(data)
            : this.template.getEmptyMessage();
        // data에 따라 검색 결과를 보여줘야 하기 때문에 동적으로 만듦
        super.show();
    }
}

class Template {
    getList(data) {
        return `
            <ul class="result">${data.map(this._getItem).join("")}</ul>
        `
    }

    getEmptyMessage() {
        return `
            <div class="empty-box">검색결과가 없습니다.</div>
        `;
    }

    _getItem({imageUrl, name}) {
        return `
            <li class="result">
                <img src="${imageUrl}" alt="${name}" />
                <p>${name}</p>
            </li>
        `;
    }
}
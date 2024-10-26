import KeywordListView from './KeywordListView.js';
import {delegate, formatRelativeDate, qs} from "../helpers.js";

export default class HistoryListView extends KeywordListView {
    constructor() {
        super(qs("#history-list-view"), new Template());
    }

    bindEvents() {
        // x버튼 클릭에 대한 binding 추가
        delegate(this.element, "click", "button.btn-remove", event => this.handleClickRemoveButton(event));
        super.bindEvents();
    }

    handleClickRemoveButton(event) {
        // 부모 element의 dataset.keyword를 같이 전달
        // console.log(event.target.parentElement.dataset.keyword);
        const value = event.target.parentElement.dataset.keyword;
        this.emit("@remove", {value})
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
        <div class="empty-box">검색 이력이 없습니다.</div>
        `;
    }

    _getItem({id, keyword, date}) {
        return `
            <li data-keyword=${keyword}>
                ${keyword}
                <span class="date">${formatRelativeDate(date)}</span>
                <button class="btn-remove"></button>
            </li>
        `;
    }

}
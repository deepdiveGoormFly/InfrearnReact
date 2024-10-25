import View from "./View.js";
import {qs} from "../helpers.js";

const TapType = {
    KEYWORD: 'KEYWORD',
    HISTORY: 'HISTORY'
}

const TabLabel = {
    [TapType.KEYWORD]: '추천 검색어',
    [TapType.HISTORY]: '최근 검색어'
}

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
            <ul>${Object.values(TapType)
                .map(tabType => ({tabType, tabLabel: TabLabel[tabType]}))
                .map(this._getTab)
                .join("")}
            </ul>
        `;
    }
    _getTab( {tabType, tabLabel} ) {
        return `
            <li data-tab="${tabType}">
                ${tabLabel}
            </li>
        `;
    }
}
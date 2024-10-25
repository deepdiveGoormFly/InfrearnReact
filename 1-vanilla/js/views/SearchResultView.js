import View from "./View.js";
import {qs} from "../helpers";

export default class SearchResultView extends View {
    constructor() {
        super(qs("#search-result-view"));

        // dom을 만드는 용도의 template함수
        this.template = new Template();
    }
}

class Template {
}
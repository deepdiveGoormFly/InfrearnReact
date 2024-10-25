import View from "./View.js";
import {qs} from "../helpers.js";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view")); //element id를 기준으로 가져와서 this에 저장
        // 갖고온 element
        console.log("this",this);

        // this.element에서 type=reset인 것을 this.resetElement로 랩핑하고 값을 가진다
        this.resetElement = qs("[type=reset]", this.element);
        // resetElement의 값을 visible option으로 관리해서 보여지고 안보여지고를 구분하게끔 한다.
        this.showResetButton(false);
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }
}
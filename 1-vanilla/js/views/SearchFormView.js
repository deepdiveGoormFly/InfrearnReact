import View from "./View.js";
import {on, qs} from "../helpers.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view")); //element id를 기준으로 가져와서 this에 저장
        // 갖고온 element
        console.log("this",this);

        this.inputElement = qs("[type=text]", this.element);
        this.resetElement = qs("[type=reset]", this.element);

        this.showResetButton(false);
        this.bindEvent();
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }

    bindEvent() {
        on(this.inputElement, "keyup", () => this.handleKeyUp());
        on(this.element, "submit", (event) => this.handleSubmit(event));
    }

    handleKeyUp() {
        // console.log(tag, "handleKeyUp");
        console.log(tag, "handleKeyUp", this.inputElement.value);
        const {value} = this.inputElement;
        this.showResetButton(value.length > 0);
    }

    handleSubmit(event) {
        event.preventDefault(); // browser 기본 event 동작 막기
        console.log(tag, "handleSubmit");
    }
}
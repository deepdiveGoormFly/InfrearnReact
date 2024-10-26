import View from "./View.js";
import {on, qs} from "../helpers.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view"));
        // console.log("this",this);

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
        this.on("submit", (event) => this.handleSubmit(event));
        on(this.resetElement, "click", () => this.handleReset());
    }

    handleKeyUp() {
        // console.log(tag, "handleKeyUp", this.inputElement.value);
        const {value} = this.inputElement;
        this.showResetButton(value.length > 0);
        if (value.length <= 0) {
            this.handleReset();
        }
    }

    handleSubmit(event) {
        event.preventDefault(); // browser 기본 event 동작 막기
        console.log(tag, "handleSubmit");
        const {value} = this.inputElement;
        this.emit("@submit", {value});
    }

    handleReset() {
        console.log(tag, "handleReset");
        this.emit("@reset");
    }
    show(keyword) {
        // todo
        this.inputElement.value = keyword;
    }
}
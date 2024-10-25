import View from "./View";
import {qs} from "../helpers";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view")); //element의 id를 갖고온다.

        this.resetElement = qs("[type=reset]", this.element);
        this.showResetButton(false);
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }
}
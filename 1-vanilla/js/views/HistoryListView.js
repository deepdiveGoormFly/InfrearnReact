import KeywordListView from './KeywordListView.js';
import {qs} from "../helpers.js";

export default class HistoryListView extends KeywordListView {
    constructor() {
        super(qs("#history-list-view"), new Template());
    }
}
class Template {

}
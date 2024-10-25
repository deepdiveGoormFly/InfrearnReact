const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView}) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;

    // TODO
    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", event => this.search(event));
  }

  search(event) {
    // console.log(tag, event);
    console.log(tag, event, event.detail);
    // console.log(tag, event.detail);
  }
}

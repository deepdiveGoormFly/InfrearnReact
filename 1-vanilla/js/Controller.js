const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView}) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", event => this.search(event.detail.value))
        .on("@reset", () => this.reset());
  }

  search(keyword) {
    console.log(tag, keyword);
    // TODO 검색 결과를 위한 view를 만들 때 추가
  }

  reset() {
    console.log(tag, "reset");
    
  }
}

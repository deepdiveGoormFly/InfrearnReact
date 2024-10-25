const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView, searchResultView}) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", event => this.search(event.detail.value))
        .on("@reset", () => this.reset());
    // Method chaining 걸려 있다 : on() 메소드는 return this를 하기 때문에 위와 같이 사용 가능
  }

  search(keyword) {
    console.log(tag, keyword);
    // TODO 검색 결과를 위한 view를 만들 때 추가
    this.store.search(keyword);
  }

  reset() {
    console.log(tag, "reset");
    
  }
}

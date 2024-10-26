import {TabType} from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView, searchResultView, tabView, keywordListView, historyListView}) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.keywordListView = keywordListView;
    this.historyListView = historyListView;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", event => this.search(event.detail.value))
        .on("@reset", () => this.reset());
    // Method chaining 걸려 있다 : on() 메소드는 return this를 하기 때문에 위와 같이 사용 가능
    // VIEW의 이벤트를 수신하는 부분
    this.tabView.on("@changeTab", event => this.change(event.detail.tabValue));
    this.keywordListView.on("@click", event => this.search(event.detail.value));
  }

  search(keyword) {
    console.log(tag, keyword);
    // 검색 결과를 위한 view를 만들 때 추가
    this.store.search(keyword);
    this.render();
  }

  reset() {
    console.log(tag, "reset");
    // x버튼 클릭 시 검색 결과도 없애야 함
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.searchFormView.showResetButton(false);
    this.render();
  }

  render() {
    // controller가 관리하는 view를 이용해 화면에 출력하는 기능
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }

    this.tabView.show(this.store.selectedTab);
    if (this.store.selectedTab === TabType.KEYWORD) {
      this.keywordListView.show(this.store.getKeywordList());
      this.historyListView.hide();
    } else if(this.store.selectedTab === TabType.HISTORY) {
      this.keywordListView.hide();
      this.historyListView.show(this.store.getHistoryList());
    } else {
      throw "사용할 수 없는 탭입니다.";
    }

    this.searchResultView.hide();
  }

  change(tabValue) {
    console.log(tag, "changeTab", tabValue);
    this.store.selectedTab = tabValue;
    this.render();
    // console.log(this.store.selectedTab);
    // this.tabView.show(this.store.selectedTab);
  }
  renderSearchResult() {
    this.searchFormView.show(this.store.searchKeyword);
    this.tabView.hide();
    this.keywordListView.hide();
    this.historyListView.hide();

    this.searchResultView.show(this.store.searchResult);
  }
}

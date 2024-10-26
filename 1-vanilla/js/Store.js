import { TabType } from "./views/TabView.js";
const tag = "[store]";

export default class Store {
  constructor(storage) {
    console.log(tag);
    if (!storage) throw "no storage";

    this.storage = storage;

    // 검색 결과 초기화
    this.searchKeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.KEYWORD;
  }

  // 검색 결과를 productData에 포함되어 있는지 체크하는 부분
  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter(product =>
        product.name.includes(keyword));
  }

  getKeywordList(){
    // todo 추천 검색어 목록을 storage에서 찾아서 반환하는 메소드
    return this.storage.keywordData;
  }
}

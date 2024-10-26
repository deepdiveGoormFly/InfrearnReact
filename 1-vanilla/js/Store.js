import { TabType } from "./views/TabView.js";
import {createNextId, createPastDate, formatRelativeDate} from "./helpers.js";
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
    // 검색 시 최근 검색어 목록에 추가
    this.addHistory(this.searchKeyword);
  }

  getKeywordList(){
    //추천 검색어 목록을 storage에서 찾아서 반환하는 메소드
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history2.date > history1.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
        (history) => history.keyword !== keyword
    );
  }

  // helper.js 의 유틸리티를 활용해 추가하기
  addHistory(keyword) {
    this.storage.historyData.push({id:createNextId(this.storage.historyData), keyword: keyword, date: new Date()});
  }
}

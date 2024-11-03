import storage from "./storage.js";
const tag = "[store]";

class Store {
  constructor(storage) {
    console.log(tag);
    if (!storage) throw "no storage";

    this.storage = storage;
  }

  // 검색 결과를 productData에 포함되어 있는지 체크하는 부분
  search(keyword) {
    return this.storage.productData.filter(product =>
        product.name.includes(keyword));
  }
}

// 싱글톤 패턴으로 생성
const store = new Store(storage);
export default store;
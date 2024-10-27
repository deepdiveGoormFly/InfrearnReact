// 코드가 많아질 겉데, index.html에만 추가하면 코드 관리가 어려워짐
// main.js는 시작점
// 코드는 모듈별로 구분해서 저장하기 때문에 import해서 사용할 예정
// [헤더 구현]
const element = (
    <header>
        <h2 className="container">검색</h2>
    </header>
);
ReactDOM.render(element, document.querySelector("#app"));

// HTML attribute는 소문자만 사용
// JSX 는 camel case를 사용
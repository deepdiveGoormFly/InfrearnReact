import store from "./js/Store.js";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "", // 입력값을 나타내는 상태
            searchResult: [], // 겸색 결과
            submitted: false, // 검색을 했는지 여부 확인
        };
    }

    handleChangeInput(event) {
        const searchKeyword = event.target.value;
        if (searchKeyword.length <= 0) {
            return this.handleReset();
        }
        this.setState({searchKeyword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("TODO : handleSubmit", this.state.searchKeyword);
        if (this.state.searchKeyword.length > 0) {
            this.setState({searchResult: [
                    this.state.searchKeyword,
                ]}, () => {
                console.log("TODO : handleSubmit", this.state.searchResult);
                this.search(this.state.searchKeyword);
            });
        }
    }

    handleReset() {
        this.setState(() => { // 비동기로 동작하기 때문에 callback 함수를 호출하기
            return {searchKeyword: "", submitted: false, searchResult: []};
        }, () => {
            // callback function
            // console.log("TODO : handleReset", this.state.searchKeyword);
            // console.log("TODO : handleResult", this.state.searchResult);
            // console.log("TODO : submitted", this.state.submitted);
        })
    }
    search(searchKeyword) {
        const searchResult = store.search(searchKeyword);
        this.setState({
            searchResult,
            submitted: true
        });
    }

    render() {
        const searchForm = (
            <form id="search-form-view" onSubmit={(event) => this.handleSubmit(event)}
                  onReset={() => this.handleReset()}>
                <input type="text"
                       placeholder="검색어를 입력하세요"
                       autoFocus
                       value={this.state.searchKeyword}
                       onChange={(event) => this.handleChangeInput(event)}
                />
                {/*<button type="reset" className="btn-reset"></button>*/}
                {this.state.searchKeyword.length > 0 && (
                    <button type="reset" className="btn-reset"></button>
                )}
            </form>
        );

        const searchResult = (
            (this.state.searchResult.length > 0 ? (
                <ul className="result">
                    {this.state.searchResult.map((item, index) => {
                        return (
                            <li key={index} className="result-item">
                                <img src={item.imageUrl} alt={item.name}/>
                                <p>{item.name}</p>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <div className="empty-box"> 검색 결과가 없습니다.</div>
            ))
        );

        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
                    {searchForm}
                    <div className="content">
                        {this.state.submitted && searchResult}
                    </div>
                </div>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
// ReactDOM.render(element, document.querySelector("#app"));

// HTML attribute는 소문자만 사용
// JSX 는 camel case를 사용
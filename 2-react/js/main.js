import store from "./js/Store.js";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "", // 입력값을 나타내는 상태
            searchResult: [], // 겸색 결과
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
        // if (this.state.searchKeyword.length > 0) {
        //     this.state.searchResult.push(this.state.searchKeyword);
        // }
        // console.log("TODO : handleSubmit", this.state.searchResult);
        if (this.state.searchKeyword.length > 0) {
            this.setState({searchResult: [
                    this.state.searchKeyword,
                ]}, () => {
                console.log("TODO : handleSubmit", this.state.searchResult);
            });
        }
    }

    handleReset() {
        this.setState(() => { // 비동기로 동작하기 때문에 callback 함수를 호출하기
            return {searchKeyword: ""};
        }, () => {
            // callback function
            console.log("TODO : handleReset", this.state.searchKeyword);
        })
    }
    search(searchKeyword) {
        const searchResult = store.search(searchKeyword);
        this.setState({ searchResult });
    }

    render() {

        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
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
                    <div className="content">
                        {this.state.searchResult.length > 0 ? (
                            <ul className="result">
                                {this.state.searchResult.map(item => {
                                    return (
                                        <li key={item} className="result-item">
                                            <img src={item.imageUrl} alt={item.name} />
                                            <p>{item.name}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            // <div>TODO : 검색 결과 목록 표시하기</div>
                        ) : (
                            <div className="empty-box"> 검색 결과가 없습니다.</div>
                        )}
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
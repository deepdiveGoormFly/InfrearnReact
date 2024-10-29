class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "", // 입력값을 나타내는 상태
        };
    }

    handleChangeInput(event) {
        this.setState({searchKeyword: event.target.value})
        console.log("searchKeyword : ",this.state.searchKeyword);
    }

    render() {
        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
                    <form id="search-form-view">
                        <input type="text"
                               placeholder="검색어를 입력하세요"
                               autoFocus
                               value={this.state.searchKeyword}
                               onChange={(event) => this.handleChangeInput(event)}
                        />
                        <button type="reset" className="btn-reset"></button>
                    </form>
                </div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
// ReactDOM.render(element, document.querySelector("#app"));

// HTML attribute는 소문자만 사용
// JSX 는 camel case를 사용
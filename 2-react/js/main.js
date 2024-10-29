class App extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
                    <form id="search-form-view">
                        <input type="text" placeholder="검색어를 입력하세요" autoFocus/>
                        <button type="reset" className="btn-reset"></button>
                    </form>
                </div>
            </>
        );
    }
}
// const element = (
//         <>
//             <header>
//                 <h2 className="container">검색</h2>
//             </header>
//             <div className="container">
//                 <form id="search-form-view">
//                     <input type="text" placeholder="검색어를 입력하세요" autoFocus/>
//                     <button type="reset" className="btn-reset"></button>
//                 </form>
//             </div>
//         </>
//     );

ReactDOM.render(<App />, document.querySelector("#app"));
// ReactDOM.render(element, document.querySelector("#app"));

// HTML attribute는 소문자만 사용
// JSX 는 camel case를 사용
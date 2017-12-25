import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log(
      fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    );
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    console.log("did render");
    // 함수명에 _(언더스코어) 쓰는 이유? 리액트 자체 함수와 나의 함수를 구분하기 위해서
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;

// 리액트 컴포넌트 라이프사이클
// Render: componentWillMount() -> render() -> componentDidMount()
// componentWillMount: 사이클이 시작되었음.
// render: 컴포넌트가 존재하게 됨.
// componentDidMount: 컴포넌트가 성공적으로 자리잡았음.

// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
// componentWillReceiveProps: 컴포넌트가 새로운 props를 받았음.
// shouldComponentUpdate: old props와 new props를 비교하여 둘이 다르다면, shouldComponentUpdate() == true
// componentWillUpdate: 앞선 단계가 true일 때, 업데이트가 시작됨을 알림.
// render: 렌더링
// componentDidUpdate: 업데이트 완료!

// 위를 활용할 때 예를 들면, componentWillUpdate가 시작됬을 때 로딩... 을 띄우다가 componentDidUpdate가 수행됬을 때 로딩을 제거하는 식으로 활용할 수 있음.

// html 엘리먼트에 key는 필수 요소이다. 없다면 콘솔에 에러가 출력된다.

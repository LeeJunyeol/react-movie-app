import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
// 리액트는 MVC에서 뷰를 담당한다.
// 리액트는 단방향 데이터플로우를 갖는다. 데이터를 변경하면 UI가 변경된다. UI가 변경되더라도 데이터가 변경되지 않는다.
// 컴포넌트 생성 -> 렌더 -> 리턴 -> html 내용 -> 브라우저에서 확인!

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     ); // jsx: Javascript + XML, UI를 템플릿화하는 문법
//   }
// }

// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired // 타입이 문자열이고, 필수여야 한다. 문자열이 아니거나, 해당 속성이 없을 경우 에러 메세지가 콘솔에 출력
//   };

//   render() {
//     return <img src={this.props.poster} />;
//   }
// }

function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}

// functional 컴포넌트 | dumb 컴포넌트 : state가 필요없음. 간결한 코드 작성. 컴포넌트 라이프사이클이 존재하지 않음. 빠르겠지?
function MoviePoster({ poster }) {
  return <img src={poster} alt="Movie Poster" />;
}
MoviePoster.prototypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;

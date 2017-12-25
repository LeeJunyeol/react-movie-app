import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
// 리액트는 MVC에서 뷰를 담당한다.
// 리액트는 단방향 데이터플로우를 갖는다. 데이터를 변경하면 UI가 변경된다. UI가 변경되더라도 데이터가 변경되지 않는다.
// 컴포넌트 생성 -> 렌더 -> 리턴 -> html 내용 -> 브라우저에서 확인!
function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} title={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie__Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

// functional 컴포넌트 | dumb 컴포넌트 : state가 필요없음. 간결한 코드 작성. 컴포넌트 라이프사이클이 존재하지 않음. 빠르겠지?
function MoviePoster({ poster, title }) {
  return (
    <img src={poster} alt={title} title={title} className="Movie__Poster" />
  );
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

MoviePoster.prototypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Movie.prototypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MovieGenre.prototypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;

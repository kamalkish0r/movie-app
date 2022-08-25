import "./css/app.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import searchIcon from "./images/search-icon.svg";

const APIurl = "http://www.omdbapi.com/?apikey=fe34a5e0";

// "https://api.themoviedb.org/3/movie/550?api_key=2cd0ff4e847008b01a7a08cdf5ccfad3";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${APIurl}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    return () => {
      searchMovies("Narcos");
    };
  }, []);

  return (
    <div className="app">
      <h1 id="header">Movies App</h1>

      <div className="search">
        <input
          type="text"
          id="search-input"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MovieCard movie={movie} key={i} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movie not found!</h2>
        </div>
      )}
    </div>
  );
}

export default App;

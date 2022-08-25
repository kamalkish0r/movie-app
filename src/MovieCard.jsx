import React from 'react'
import './css/moviecard.css';

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <div className='movie-card'>
        <div className="poster">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholer.com/150'} alt="Movie poster" />
        </div>
        <div className="movie-card-info">
          <h3 className='title'>Title : {movie.Title}</h3>
          <h4>Release year : {movie.Year}</h4>
          <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank">
            Know more at IMDB
          </a>
        </div>
    </div>
  )
}

export default MovieCard
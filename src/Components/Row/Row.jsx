import movieTrailer from 'movie-trailer';
import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from '../axios';
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();

  }, [fetchUrl]);
  // console.table(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
            console.log(trailerUrl);
          // https://www.youtube.com/watch?v=vP9C33H6G3E
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("trailer unavailable"));
    }
  }
  return (
		<div className='row'>
			<h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row
import React, { useState, useEffect } from 'react'
import axios from "../axios";
import request from "../request"
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(request.fetchNetflixOriginals);
            setMovie(requests.data.results[Math.floor(Math.random() * requests.data.results.length - 1)]);
            return requests;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
      <header className='banner'
          style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center",
      }}
      >
          <div className="banner__contents">
          {/* - background image */}
          {/* - the title */}
           {/* - div for  2 buttons(play and mylist) */}
           {/* - Description*/} 
              <h1 className='banner__title'>
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>

                  <div className="banner__buttons">
                      <button className="banner__button">Play</button>
                       <button className="banner__button">My List</button>
              </div>
              
              <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
          </div>
          <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner;
import React, { useState, useEffect } from 'react'
import axios from "../axios";
import request from "../request"

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

    console.log(movie)
  return (
      <header className='banner'
          style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center",
      }}
      >
          <div className="banner__contents">
          {/* - background image
          - the title
           - div for  2 buttons(play and mylist)
           - Description*/}
          </div>
    </header>
  )
}

export default Banner;
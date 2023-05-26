import React, { useState, useEffect } from 'react'
import axios from "../axios";
import request from "../request"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(request.fetchNetflixOriginals);
            setMovie(requests.data.results[Math.floor(Math.random())])
        }
        fetchData();
    }, []);
  return (
      <header>
          {/* - background image
          - the title
           - div for  2 buttons(play and mylist)
           - Description*/}
          
    </header>
  )
}

export default Banner
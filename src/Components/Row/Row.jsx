import React, {useState, useEffect} from 'react'
import axios from '../axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();

    }, [fetchUrl]);
    console.log(movies);

  return (
    <h2>{title}</h2>
  )
}

export default Row
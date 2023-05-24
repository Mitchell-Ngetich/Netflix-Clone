const API_KEY = "95ddb289ae44c26a74c02f9c2f8b6485";

const request = {
    fetchTrending:  `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:  `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&switch_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&switch_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&switch_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&switch_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&switch_genres=99`,
}

export default request;
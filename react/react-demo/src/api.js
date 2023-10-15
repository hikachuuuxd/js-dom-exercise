import axios from "axios";

export const getMovies = async () => {
    const movies = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return movies.data.results;
}

export const searchMovies = async (key) => {
    const search = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${key}&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return search.data
}
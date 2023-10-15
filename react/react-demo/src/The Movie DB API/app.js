import './App.css';
import { getMovies, searchMovies } from './api';
import {useEffect, useState} from "react";

const App = () => {

  const [movies, setMovies] = useState([])
  const search = async (key) => {
    if(key.length > 3) {
      const movies = await searchMovies(key)
      setMovies(movies.results)
    }
  }

  useEffect(() => {
    getMovies().then(res => {
      setMovies(res)
    })
  }, [])


  return (
    
  <>
  <div className="header">
  <input type="text" 
        onChange={({target}) => search(target.value)}
  />
  </div>
  <div className="container">
    {
      movies.map((movie, id) => 
      <div className="wrapper" key={id}>
      <div className="title">{movie.title}</div>
      <img src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`} alt="" />
      <div className="rilis">{movie.release_date} </div>
      <div className="rating">{movie.vote_average}</div>
    </div>
      )
    }
  </div>
  </>
  
  );
}

export default App;

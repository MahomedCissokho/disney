import { useEffect } from "react";
import MovieListApi from "../Services/MovieListApi";
import { useState } from "react";

function MovieList() {

  const [movieList, setMovieList] = useState([])
   useEffect(() => {
    getMoviesList()
  }, [])

  const getMoviesList = () => {
    const response = MovieListApi.getMovieList()
    setMovieList(response.data.results)
  }
  return (

    <div>
    {console.log(movieList)}
    hi
    </div>
  );
}

export default MovieList;

import "./App.css";
import Movie from "./components/Movie";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieData } from "./components/Movie";
import { MoviesList } from "./styles/subcomponets";

const App = () => {
  const FEATURED_API: string =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f2fd97aee54b08f97da5d759e20e4aa";
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    const featureApi = async () => {
      const {
        data: { results },
      } = await axios({
        url: FEATURED_API,
        method: "GET",
      });
      console.log(results);
      setMovies(
        results.map((movie: any) => {
          const movieData: MovieData = {
            title: movie.title,
            overview: movie.overview,
            posterPath: movie.poster_path,
            voteAverage: movie.vote_average,
          };
          return movieData;
        })
      );
    };
    featureApi();
  }, []);

  return (
    <>
      <MoviesList>
        {movies.length > 0 &&
          movies.map((movie, i) => <Movie key={i} {...movie} />)}
      </MoviesList>
    </>
  );
};

export default App;

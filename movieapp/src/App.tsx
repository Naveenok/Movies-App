import "./App.css";
import Movie from "./components/Movie";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { MovieData } from "./components/Movie";
import {
  AppContainer,
  MovieSearch,
  MovieSearchContainer,
  MoviesList,
} from "./styles/subcomponets";

const App = () => {
  const FEATURED_API: string =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f2fd97aee54b08f97da5d759e20e4aa";
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchThisMovie, setSearchThisMovie] = useState<string>("");
  const SEARCH_THIS_MOVIE_API: string = `https://api.themoviedb.org/3/search/movie?api_key=9f2fd97aee54b08f97da5d759e20e4aa&language=en-US&query=${searchThisMovie}&page=1&include_adult=false`;
  useEffect(() => {
    searchMovie(FEATURED_API);
  }, []);

  const searchMovie = async (url: string) => {
    const {
      data: { results },
    } = await axios({
      url,
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

  return (
    <AppContainer>
      <MovieSearchContainer>
        <MovieSearch
          type="text"
          name="searchMovie"
          placeholder="Search Movie"
          value={searchThisMovie}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchThisMovie(e.target.value);
          }}
        />
        <button onClick={() => searchMovie(SEARCH_THIS_MOVIE_API)}>
          search
        </button>
      </MovieSearchContainer>
      <MoviesList>
        {movies.length > 0 &&
          movies.map((movie, i) => <Movie key={i} {...movie} />)}
      </MoviesList>
    </AppContainer>
  );
};

export default App;

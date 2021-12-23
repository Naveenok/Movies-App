import React from "react";
import {
  Description,
  Image,
  MovieAndRating,
  MovieContainer,
  TitleAndRating,
} from "../styles/subcomponets";

export interface MovieData {
  title: string;
  posterPath: string;
  overview: string;
  voteAverage: number;
}

const Movie: React.FC<MovieData> = ({
  title,
  posterPath,
  overview,
  voteAverage,
}) => {
  const IMG_API: string = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      <MovieContainer>
        <MovieAndRating>
          <Image src={IMG_API + posterPath} alt={title} />
          <TitleAndRating>
            <p>{title}</p>
            <p>{voteAverage}</p>
          </TitleAndRating>
        </MovieAndRating>
        <Description>{overview}</Description>
      </MovieContainer>
    </>
  );
};

export default Movie;

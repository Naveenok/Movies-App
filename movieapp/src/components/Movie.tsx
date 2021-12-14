import React from "react";
import { Image, MovieContainer, TitleAndRating } from "../styles/subcomponets";

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
        <div>
          <Image src={IMG_API + posterPath} alt={title} />
        </div>
        <TitleAndRating>
          <p>{title}</p>
          <p>{voteAverage}</p>
        </TitleAndRating>
        {/* <div>
          <p>{overview}</p>
        </div> */}
      </MovieContainer>
    </>
  );
};

export default Movie;

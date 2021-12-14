import React from "react";
import { Image } from "../styles/subcomponets";

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
      <div>
        <div>
          <Image src={IMG_API + posterPath} alt={title} />
        </div>
        <div>
          <p>
            {title} {voteAverage}
          </p>
        </div>
        <div>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;

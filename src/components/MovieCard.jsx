import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const {
    title,
    poster_path,
    vote_average,
    vote_count,
    original_language,
    release_date,
    adult,
  } = movie;
  return (
    <div className="text-white movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "./not-found.webp"
        }
        className={`object-contain ${adult ? "blur-lg" : ""}`}
        alt={`Movie image for ${title}`}
      />
      <div className="mt-4">
        <div className="flex flex-row justify-between">
          <h3>{title}</h3>
          <div className="flex flex-row">
            <button
              onClick={() => setLiked(!liked)}
              className="cursor-pointer mx-2"
            >
              <span className={liked ? "text-red-500" : "text-white"}>
                {liked ? "♥" : "♡"}
              </span>
            </button>
            <h3>{vote_count}</h3>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="rating">
            <img src="Rating.png" alt="Star icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span className="mx-3"> | </span>
          <p className="lang">{original_language}</p>
          <span className="mx-3"> | </span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MovieCard;

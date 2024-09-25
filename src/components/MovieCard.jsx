/* eslint-disable react/prop-types */
import { useState } from "react";

export default function MovieCard({ movie }) {
  const [rating, setRating] = useState(movie.rating);
  const [likeCount, setLikeCount] = useState(0);

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1); // Increment like count
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p>
        Plot:<b>{movie.plot}</b>
      </p>
      <p>Released Year:{movie.year}</p>
      <p>Genre:{movie.genre}</p>
      <p>
        <img
          src={movie.poster}
          alt={`${movie.title} Poster`}
          className="w-full h-auto rounded-md mt-2"
        />
      </p>
      <p className="mt-2">Rating: {rating > 0 ? rating : "No rating yet"}</p>
      <input
        type="number"
        min="0"
        max="5"
        value={rating}
        onChange={handleRatingChange}
        className="border rounded px-2 py-1 mt-2"
      />
      <button
        onClick={handleLikeClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Like {likeCount > 0 ? `(${likeCount})` : ""}
        </span>
      </button>
    </div>
  );
}

/* eslint-enable react/prop-types */

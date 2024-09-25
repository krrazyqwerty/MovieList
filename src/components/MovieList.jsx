/* eslint-disable react/prop-types */



import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {

    return (
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {movies.map(movie => (
                <MovieCard 
                movie={movie}
                poster={movie.poster}
                key={movie.id} 
                description={movie.plot}
                website={movie.website}
                />
            ))}
        </div>
    );
};

export default MovieList;
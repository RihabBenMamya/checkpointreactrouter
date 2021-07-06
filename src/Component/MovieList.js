import React from "react";
import PropTypes from 'prop-types';
import MovieCard from"./MovieCard";
const MovieList = ({movies})=>{
return(
    
    <div className='row mt-2'>
    {movies.map((movie) => (
        
              <MovieCard movie={movie}/>
              
            ))}
    </div>
   
  
)
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default MovieList;
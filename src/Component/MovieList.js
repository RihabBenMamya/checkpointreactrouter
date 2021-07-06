import React from "react";

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
export default MovieList;
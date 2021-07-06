import React,{useState} from "react";
import './App.css';
import MovieList from"./Component/MovieList";
import Filter from "./Component/Filter";
import {Movies} from "./Component/Movie";
import Footer from './Component/Footer';
import AddMovie from './Component/AddMovie';

const App = () => {
  const [movies, setMovies] = useState(Movies);

  const [filterMovie, setFilterhMovie] =useState('');
  const [ratingSearch, setRatingSearch] = useState(0); 
  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Checkpoint Movie App</h1>
      <AddMovie handleAdd={addMovie} />
      
      </header>
      <div className='container'>
      
       
       <div className='row justify-content-center mt-5'>
       <Filter  setFilterhMovie={setFilterhMovie} 
       setRatingSearch={setRatingSearch}
       ratingSearch={ratingSearch}/>
       
       </div>
       <div className='row mt-5'>
           <MovieList movies={ filterMovie ? 
            movies.filter((movie)=>
            movie.title.toLowerCase().includes(filterMovie.toLowerCase())) 
            : ratingSearch > 1
            ? movies.filter((movie) => movie.rating >= ratingSearch)
            : movies} />    
  </div>
          
    </div>
   
    <Footer />
    </div>
  );
}

export default App;

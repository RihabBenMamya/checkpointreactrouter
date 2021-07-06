import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import Rate from './Rate';

const Filter=({setFilterhMovie, setRatingSearch, ratingSearch})=>{
    return(
        <div className="container" >
        <div className='row'>
        <div className='col-md-8'>
        <Input className='form-control rounded-pill border-0 shadow-sm px-4'  onChange={e => setFilterhMovie(e.target.value)}  placeholder='name of movie...' />
        </div>
        <div className='col-md-4 star-rating'>
        <Rate
          setRatingSearch={setRatingSearch}
          rate={ratingSearch}
        />
        </div>
        
        </div>
        </div>
    )
}
Filter.propTypes = {
  setFilterhMovie: PropTypes.func.isRequired,
  setRatingSearch: PropTypes.func.isRequired,
  ratingSearch: PropTypes.func.isRequired,
};
export default Filter;
import React from "react";
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rate from './Rate';
import {
  Link
} from "react-router-dom";
const MovieCard = ({movie})=>{
return(
  <div className='col-4 mt-2' key={movie.title}>
<Link to={`/${movie.title}`}>      
     <Card  hoverable style={{ height: `500px` , backgroundColor: 'black'}}>
        <Card.Title>
          <div className='title'>
            <h6>{movie.title}</h6>
          </div>
        </Card.Title>
  <Card.Img variant="top" src={movie.posterURL} alt='image' style={{ width:'100%' , height: `300px` }} />
  <Card.Body>
    <div className='row paragraph'>
       <Card.Text >
        {movie.description.length < 100 ? `${movie.description}`
                : `${movie.description.substring(0, 100)}...`}
       </Card.Text>
    </div>       
    
    <div className='row' style={{  color: 'rgb(255, 217, 0)'}}>
    <Rate  rate={movie.rating} />
      
    </div>
  </Card.Body>
</Card>
</Link>

</div>
  
)
}
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieCard;
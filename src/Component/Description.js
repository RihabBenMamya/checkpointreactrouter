import React from "react";
import PropTypes from 'prop-types';
import { Movies } from "./Movie";
import { Row ,Col,Card} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import ReactPlayer from "react-player";
 
import Rate from './Rate'
const Description = ({match})=>{
var movie=Movies.find(item =>item.title == match.params.id)
return(
    
    <div>
       
      <div>
      <h1>{movie.title}</h1>
      </div>
      <br/>
      
      <Card>
      <div style={{ backgroundColor: 'black' }}>
      <Row>
<Col col-md-4>
<img src={movie.posterURL} alt='image' style={{ width:'100%'  }} />
</Col>
<Col col-md-8>
  <br/><br/>
  <p style={{ color: 'white' }}>
{movie.description}</p>

<ReactPlayer
        url={movie.trailerLink}
      />
<div className='star-rating'><Rate  rate={movie.rating} /></div>
</Col>   
      </Row>
      </div>
      </Card>
      
    </div>
  
)
}

export default Description;
import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import "./movieCarte.css"
import { Link } from 'react-router-dom';
const MovieCard = ({movie}) => {
  return (
    <Link to= {movie.title} ><div  className='movie_card'>
    <img className=''  src={movie.img} alt=""/>
    <div>{movie.title}</div>
    <StarRatingComponent 
      name="rate" 
      starCount={5}
      value={movie.rate}
    //   onStarClick={this.onStarClick.bind(this)}
    />
    {/* <div>{movie.rate}</div> */}
    {/* <div>{movie.description}</div> */}
    {/* <div>{movie.id}</div> */}
</div></Link>
    
  )
}

export default MovieCard
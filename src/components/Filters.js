import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filters = ({toSearch , handelSearch , handelRate}) => {
  return (
    <div className='centerr'>
      <StarRatingComponent 
          name="rate" 
          starCount={5}
          // value={movie.rate}
          onStarClick={(value) => handelRate(value)}
        />

      <input placeholder='search' type="text" ref={toSearch}/>
      <button onClick={handelSearch}>search</button>
    </div>
  )
}

export default Filters
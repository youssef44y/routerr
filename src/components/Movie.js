import React from 'react'
import { useParams } from 'react-router-dom'
import data from './Data'
import "./filter.css"
const Movie = () => {
    const params = useParams()
    const Result = data.find(movie => movie.title=== params.id);
     console.log(Result);
  return (
    <>
    <div className='tit'>{Result.title}</div>
    <div className='des'>  {Result.description} 
    <img src={Result.img} alt=""/> 
    </div>

    </>
  )
}

export default Movie
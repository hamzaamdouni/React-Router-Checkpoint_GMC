import React from 'react'
import './MovieList.css'
import OneMovie from './OneMovie'


const MovieList = ({movies , searchtext , searchrating}) => {
    console.log(searchrating)
    return (
        <div className='MovieListC'>
            {movies.filter((el)=>el.name.toLowerCase().includes (searchtext.toLowerCase()))
            .filter((el)=>el.rating<=searchrating)
            .map((el)=> 
            (<OneMovie onemovie={el} key={el.id}/>
            ))}
        </div>
    )
}

export default MovieList

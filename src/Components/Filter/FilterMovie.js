import React from 'react'
import SearchMovie from '../SearchMovie/SearchMovie';

const FilterMovie = ({setSearchText , setsearchRating}) => {
    return (
        <div className='FilterMovieC'>
            <SearchMovie setSearchText={setSearchText} setsearchRating={setsearchRating}/>
        </div>
    )
}

export default FilterMovie

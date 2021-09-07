import './App.css';
import React, { useState } from "react";
import {moviesData} from './Constant/Data'
import NavBar from './Components/NavBar/NavBar';
import MovieList from './Components/MovieList/MovieList';
import FilterMovie from './Components/Filter/FilterMovie';
import { Route, Switch } from 'react-router-dom';
import Description from './Components/Description/Description';

function App() {
  const [movie, setMovie] = useState(moviesData)
  const [searchtext, setSearchtext] = useState('')
  const [searchrating, setsearchRating] = useState(5)
  
  const addMovie=(newmovie)=>(setMovie([newmovie, ...movie]))
  return (
    <div className="App">
      <NavBar addMovie={addMovie}/>
      <h1>WATCH MOVIES ONLINE</h1>
      <Switch>
        <Route exact path='/' render={()=>(
          <div>
            <FilterMovie setSearchText={setSearchtext} setsearchRating={setsearchRating}/>
            <MovieList movies={movie} searchtext={searchtext} searchrating={searchrating}/>
          </div>
        )}/>
        <Route path='/description/:id' component={Description}/>
      </Switch>

    </div>
  );
}

export default App;
import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';

import "./MovieGrid.css"
import Mickey from "../assets/mickeylogo.png"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
const [topMovies, setTopMovies] = useState([])

async function getTopRatedMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  setTopMovies(data.results)
}
useEffect(() => {
  const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
  getTopRatedMovies(topRatedUrl)
}, []);

  return (
    <div className="container">
     <img src={Mickey} alt="logo" className='mickey'/>
     <div className="movies-container">
      {topMovies.length === 0 && <p>Carregando...</p>}
     {topMovies.length > 0 && topMovies.map((movie)=>{
        return(
         <MovieCard movie={movie} key={movie.id} />
        )
      })}
     </div>
    </div>
  )
}

export default Home

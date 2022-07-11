import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import MovieCard from "../components/MovieCard"

import "./Movie.css"


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  async function getMovie(url) {
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)
  }

  function formarCurrency(number) {
    return number.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, []);

  return (
    <div className='movie-page'>

      {movie &&
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formarCurrency(movie.budget)}</p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formarCurrency(movie.revenue)}</p>
          </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview} minutos</p>
          </div>
        </>}

    </div>
  )
}

export default Movie

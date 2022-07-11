import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import "./Navbar.css"

function Navbar() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if(!search) return //se n tiver nada no serach ele retorna, para n abrir uma página vazia

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <nav id="navbar">
    <h2>
      <Link to="/"> <BiCameraMovie/> Movies Lib</Link>
    </h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Busque um filme' onChange={(e)=>setSearch(e.target.value)} value={search} />
        <button type='submit'>
            <BiSearchAlt2/>
        </button>
    </form>
  </nav>
 
  )
}

export default Navbar

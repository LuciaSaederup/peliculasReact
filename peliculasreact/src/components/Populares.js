import Carrousel from "./Carrousel"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import PeliculaTarjeta from "./PeliculaTarjeta"
import { useState, useEffect } from "react"


const Populares=()=>{
  const [peliculasPopulares, setPeliculasPopulares] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculasPopulares(data.results))
  }, [])
  console.log(peliculasPopulares)
    return (
      <div>
      <h2>Peliculas Populares</h2>
       <Box sx={{
       display:'flex',
       flexDirection: 'row',
       flexWrap: 'wrap' }}
       >
        
       {peliculasPopulares.map(pelicula => (
       <PeliculaTarjeta
       titulo={pelicula.title}
      imagen={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
       link={`/${pelicula.id}`}
       id={pelicula.id}/>
       ))}
       </Box>
       </div>
            )
    }
    export default Populares;
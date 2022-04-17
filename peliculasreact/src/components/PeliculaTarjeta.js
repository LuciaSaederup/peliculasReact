import * as React from 'react'
import Box from '@mui/material/Box';
import { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

const PeliculaTarjeta=({url})=>{

  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data))
  }, [])
console.log(peliculas)
return(
  <div>
    {peliculas.map(pelicula => (
      <Link to={`/detalle/${pelicula.id}`} style={{textDecoration:'none'}}>
        <Box sx={{
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          width: 200,
          height: 350,
          margin: '10px',
          justifyContent: 'center'
        }}>
          <Box
            component="img"
            alt={pelicula.titulo}
            src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
          />
          <Box sx={{ typography: 'subtitle2' }}>
            {pelicula.titulo}
          </Box>
          <Button size="small" color="primary">
            👁️‍🗨️ Ver más
          </Button>
        </Box>
      </Link>))}
  </div>
)};

export default PeliculaTarjeta;

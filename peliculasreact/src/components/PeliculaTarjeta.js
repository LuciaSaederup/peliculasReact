import * as React from 'react'
import Box from '@mui/material/Box';
import { useState, useEffect } from "react"
import Card from '@mui/material/Card';
import { Link } from "react-router-dom"
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const PeliculaTarjeta=({url})=>{

  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])
console.log(peliculas)
return(
  <div className='movie-grid'>
    {peliculas.map(pelicula => (
      <Link to={`/detalle/${pelicula.id}`} style={{textDecoration:'none'}}>
        <Card sx={{bgcolor:"transparent", m:1, width:300, }} key={pelicula.id}>
           
           
               <CardMedia 
               sx={{width:300,
              heigth:400,}}
               component="img"
               image = {`https://image.tmdb.org/t/p/w400/${pelicula.backdrop_path}`}
               alt={pelicula.title}
               />
          
           <Typography  sx={{p:3}}
               variant="subtitle1" 
               fontWeight= "bold" 
               textAlign="center" 
    
           >
               {pelicula.title}
           </Typography>
   </Card>
      </Link>))}
  </div>
)};

export default PeliculaTarjeta;

import { useState, useEffect } from "react"
// import ApiKey from "./Variables"
// import LinkApi from "./Variables"
import PeliculaItem from "./PeliculaItem"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




const ListaDePeliculas = ({ titulo, url }) => {

  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])
  
  return (
   <Box
        sx={{
          display:'flex',
          flexWrap:'wrap',
          bgcolor: 'pink',
          border: 1,
          height: 300,
          width:500
        }}>
      <h3>
      {titulo}      
      </h3>
      {peliculas.map(pelicula => (
        
        <PeliculaItem 
        titulo={pelicula.title}
        imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
        link={`/${pelicula.id}`}
        id={pelicula.id}/>      

        ))}
    </Box>
  )}

export default ListaDePeliculas



import { useState, useEffect } from "react"
// import ApiKey from "./Variables"
// import LinkApi from "./Variables"
import PeliculaItem from "./PeliculaItem"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';




const ListaDePeliculas = ({ titulo, url }) => {

  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])
  return (
  <Paper style={{maxHeight: 500,
   overflow: 'auto',
   width: '500px',
   padding: '5px',
   margin: '60px',
   border: 2,
   borderColor:'white',
   color:'black',
   textAlign:'center',
   
   }}>
      <h4>{titulo}</h4>
      

      {peliculas.map(pelicula => (
        <Link to={`/detalle/${pelicula.id}`} style={{textDecoration:'none',
        color:'black',
        }}>
        <PeliculaItem 
        titulo={pelicula.title}
        imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
        link={`/${pelicula.id}`}
        id={pelicula.id}
       />  
       </Link>    

        ))}
</Paper>    
  )}

export default ListaDePeliculas



import React from 'react';
 import { useState, useEffect } from "react"
 import Carousel from 'react-bootstrap/Carousel'
 import Slider from "react-slick";
 import {Link} from 'react-router-dom';
 import ItemCarousel from "./ItemCarousel";
 import Container from '@mui/material/Container';
 import Box from '@mui/material/Box';
 import Card from '@mui/material/Card';
 import notFound from "../img/notFound.png"
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

 import { positions } from '@mui/system';


const Carrousel=()=>{

const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])
  console.log(peliculas)
    return (
       
            <Box sx={{
            display:"flex",
                bgcolor:'black',
            flexDirection:"column", mt:7,
        //    height:450,
           position:'relative',
           border:1, 
            
        }}>
                <Slider 
                    infinite= {true}
                    slidesToShow= {3}
                    slidesToScroll= {1}
                    autoplay= {true}
                    speed= {800}
                    autoplaySpeed= {800}
                    cssEase= "linear"
                >
                {peliculas.map(pelicula=> (
                    
                            <ItemCarousel
                                imagen={pelicula.backdrop_path ? 
                                    `https://image.tmdb.org/t/p/w400/${pelicula.backdrop_path}`
                                    : notFound
                                }
                                titulo={pelicula.title? pelicula.title: pelicula.name}
                                id={pelicula.id}
                                descripcion={pelicula.overview}
                            />
                        
                    ))}
                </Slider>
            </Box>
     
        
    )
}


export default Carrousel;
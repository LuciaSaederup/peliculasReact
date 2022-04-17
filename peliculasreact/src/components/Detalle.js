import React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { positions } from '@mui/system';




const Detalle=()=>{
    const params = useParams() 
    const [pelicula, setPelicula] = useState([])
    console.log(params.idPelicula)

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&language=es-AR&`)
      .then(res => res.json())
      .then(data => setPelicula(data))
    }, [params.idPelicula])
    console.log(pelicula)
    return(
        <Box 
            sx={{
                // mt:12, 
                display:"flex", 
                flexDirection:"column", 
                bgcolor:"white",
                position:"absolute"
            }}
        > 
            <CardMedia sx={{
                position:"center", 
                opacity: 0.4,
                
            }}
                component="img"
                image = {`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
                alt={pelicula.title ? pelicula.title: pelicula.name} 
            />

            <CardContent sx={{
                display:"flex", 
                mt:5, p:1, 
                // position:"absolute", 
                left:40, top:10,
                bgcolor:'transparent',
                alignItems:"center", zIndex:1, position:'absolute'
            }}
            >
                <Box sx={{width:350, display:"flex", justifyContent:"center", border:1, borderColor:'black' }}>
                    <CardMedia 
                    component="img"
                    image = {`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                    alt={pelicula.title ? pelicula.title: pelicula.name} 
                    />
                </Box>
                <Box sx={{pl:2, width:700, color:"black",
            }}>
                    <Typography variant='h4' fontWeight="bold"> 
                        {pelicula.title ? pelicula.title: pelicula.name}  
                    </Typography>
                    <Typography variant="body1"sx={{mt:1.2, mb:1.2}}> 
                        {pelicula.overview} 
                    </Typography>
                </Box>
            </CardContent>
         </Box>

    )
 };
            //             position:'absolut'
//         }}>
//         <Box sx={{
//             backgroundImage:`url(https://image.tmdb.org/t/p/original/g4tMniKxol1TBJrHlAtiDjjlx4Q.jpg)`,
//             backgroudSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//             height:'1000px',
//             width:'100%',
//             opacity: 0.5,
//             display:'flex',
//             justifyContent:'center',
//             marginTop: '50px',
            

//         }}/>
//             <Box sx={{
//            position:'fixed',
//             zIndex: 1,
//         height:900,
//         width:600,
//         bgcolor:'transparent',
//         top: '80px',
//     left: '190px',
//     bottom:'100px'
//         }}>
//         <img sx={{
//         backgroundImage: `url(https://image.tmdb.org/t/p/w500/g4tMniKxol1TBJrHlAtiDjjlx4Q.jpg)`,
//         backgroudSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: 700,
//         margin:'5px',
        
//         }}/>
        
//         <Box sx={{
//         textAlign:'center',
//         bgcolor:'white',
//         height:'200px'
//     }}>
//         <h2>{pelicula.title}</h2>
//         <Typography>
//         {pelicula.overview}
//         </Typography>
//         </Box>
//         </Box>
//         </Box>

    export default Detalle
import Carrousel from "./Carrousel"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';



import ListaDePeliculas from "./ListaDePeliculas"


const Home=()=>{   
 return (
   <>
   <Carrousel/>
    <Box sx={{
      display:'flex',
      flexDirection: 'row',
      bgcolor:'white',
    }}>
          
    <ListaDePeliculas titulo="Peliculas Populares" url="popular" />
     <ListaDePeliculas titulo="Peliculas mejor puntuadas" url="top_rated" />
    
    </Box>
    
    </>)
};

    export default Home;
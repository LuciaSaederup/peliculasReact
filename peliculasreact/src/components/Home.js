import Carrousel from "./Carrousel"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';


import ListaDePeliculas from "./ListaDePeliculas"


const Home=()=>{   
 return (

    <React.Fragment>
        <CssBaseline />
        <Container fixed>
        <Box sx={{ bgcolor: 'lightpink', height: '500px', width:"500px" }}>
        <ListaDePeliculas titulo="Peliculas Populares" url="popular" />
        <ListaDePeliculas titulo="Ultimos Lanzamientos" url="ultimos-lanzamientos" />
        </Box>
        </Container>
    </React.Fragment>
  
)
};
                  
    export default Home;
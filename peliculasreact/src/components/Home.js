import Carrousel from "./Carrousel"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';



import ListaDePeliculas from "./ListaDePeliculas"


const Home=()=>{   
 return (

    <Box sx={{
      bgcolor: 'black',
   
      
    }}>
          
    <ListaDePeliculas titulo="Peliculas Populares" url="popular" />
     <ListaDePeliculas titulo="Peliculas mejor puntuadas" url="top_rated" />
    
    </Box>

       
  
)
};

{/* <Box
component="div"
sx={{
display: 'inline',
p: 1,
m: 1,
bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
color: (theme) =>
  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
border: '1px solid',
borderColor: (theme) =>
  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
borderRadius: 2,
fontSize: '0.875rem',
fontWeight: '700',
}}> */}
    export default Home;
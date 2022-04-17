import Box from '@mui/material/Box';
import * as React from 'react';
import PeliculaTarjeta from "./PeliculaTarjeta"



const Populares=()=>{
 
    return (
      <div>
      <h2>Peliculas Populares</h2>
       <Box sx={{
       display:'flex',
       flexDirection: 'row',
       flexWrap: 'wrap' }}
       >
         <PeliculaTarjeta
      url="populares"/>
       </Box>
       </div>
            )
    }
    export default Populares;
import Box from '@mui/material/Box';
import * as React from 'react';
import PeliculaTarjeta from "./PeliculaTarjeta"
import Typography from '@mui/material/Typography';

const UltimosLanzamientos=()=>{
   
    return (
        <div>
      <Typography variant="h4" fontWeight="bold"  sx={{p:1, mb:5}}>
       Ultimos Lanzamientos</Typography>
       <Box sx={{
       display:'flex',
       flexDirection: 'row',
       flexWrap: 'wrap' }}
       >
         <PeliculaTarjeta
    url="latest"/>
       </Box>
       </div>
              )
    }
                  
    export default UltimosLanzamientos;
    
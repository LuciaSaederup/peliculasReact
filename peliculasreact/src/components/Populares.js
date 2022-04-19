import Box from '@mui/material/Box';
import * as React from 'react';
import PeliculaTarjeta from "./PeliculaTarjeta"
import Typography from '@mui/material/Typography';



const Populares=()=>{
 
    return (
<Box sx={{
       
        textAlign:"center",
  mt:6,
  

       }}
       >
     <Typography variant="h4" fontWeight="bold"  sx={{p:1, mb:5}}>
       Peliculas Populares</Typography>
  <Box sx={{ display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
       }}
       >   
  <PeliculaTarjeta
    url="popular"/>
       </Box>
  </Box>
            )
    }
    export default Populares;
import * as React from 'react'
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

const PeliculaTarjeta=({titulo, imagen, id, link})=>{
    return(
      
      <Box sx={{
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        width: 200,
        height: 350,
        margin: '10px',
        justifyContent: 'center'
      }}>
        <Box
          component="img"
          alt={titulo}
          src={imagen}
        />
        <Box sx={{ typography: 'subtitle2' }}>
            {titulo}
          </Box>
        <Button size="small" color="primary">
        👁️‍🗨️ Ver más
        </Button>
    </Box>
  )
};

export default PeliculaTarjeta;
    

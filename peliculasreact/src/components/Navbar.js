import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom"
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';

const Navbar=()=>{
return (

   <Box sx={{ flexGrow: 1,
    position:"static" }}>
    
      <AppBar position ="fixed" 
                  sx={{
            display:"flex", 
            flexDirection:"row", 
            justifyContent:"space-between", 
            alignItems:"center", 
            background: '#ffbf00',
            pl:1, pr:3}}
            
        >
            <Box sx={{display:"flex", justifyContent:"flex-start", p:1}}>
                <Link to="/" style={{textDecoration:"none"}}> 
                 <LocalMoviesOutlinedIcon sx={{fontSize:35, mr:1, color:"#ffffff",'&:hover': {
                                color: '#000'}}}/>
                    
                </Link>
            </Box>

            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box sx={{ display:"flex", justifyContent:"space-between"}}>
                <Link to="/populares" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <Typography  sx={{color: '#000','&:hover': {
                                color: '#fff'}}}>
                            Populares
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/ultimos-lanzamientos" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <Typography  sx={{color: '#000','&:hover': {
                                color: '#fff'}}}>
                            Ultimos Lanzamientos
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/buscar" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <Typography  sx={{color: '#000','&:hover': {
                                color: '#fff'}}}>
                                Buscar
                            </Typography>
                        </Box>
                    </Link>
                </Box>
                
                </Box>

        </AppBar>
        </Box>
)
}
              
export default Navbar;

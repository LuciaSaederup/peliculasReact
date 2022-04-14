import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import UltimosLanzamientos from './UltimosLanzamientos';
import Home from './Home';
import Populares from "./Populares"
import Buscar from "./Buscar"
 import {useState} from "react"




const Navbar=()=>{
return (

   <Box sx={{ flexGrow: 1,
    position:"static" }}>
      <AppBar>
        <Toolbar>
         🎬
        
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>  
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/ultimos-lanzamientos">Ultimos Lanzamientos</Link>
            </Typography>  
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/populares">Populares</Link>
            </Typography>  
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/buscar">Buscar</Link>
            </Typography>  
        </Toolbar>
      </AppBar>
    </Box>
)
}
              
export default Navbar;

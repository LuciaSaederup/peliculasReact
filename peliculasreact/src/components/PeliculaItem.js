import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { positions } from '@mui/system';

// flexGrow: 1, 

const PeliculaItem = ({titulo, imagen, link}) => {
    return (
      <Box
        sx={{
          display: 'block',
          bgcolor: 'green',
            borderRadius: 2,
            border:1,
          width:400,
          height:50,  
          margin:'10px',
          alignItems:'center'	
          
        }}>
          <List>
            
            <ListItem>
            <ListItemAvatar>
          <Avatar alt={titulo} src={imagen}>
          </Avatar>
        </ListItemAvatar>
        
        
        <ListItemText primary= {titulo}/>
       
        <ListItemButton>
          ➕
        </ListItemButton>
        </ListItem>
        </List>    
    </Box>
     
    )
  }

  
  // <Box
  //       component="span"
  //       sx={{
  //         display: 'block',
  //         p: 1,
  //         m: 1,
  //         bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  //         color: (theme) =>
  //           theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
  //         border: '1px solid',
  //         borderColor: (theme) =>
  //           theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
  //         borderRadius: 2,
  //         fontSize: '0.875rem',
  //         fontWeight: '700',
          
  //       }}
  export default PeliculaItem
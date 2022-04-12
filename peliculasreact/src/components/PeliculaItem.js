import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



const PeliculaItem = ({titulo, imagen, link}) => {
    return (
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      
      <Grid item xs={12} md={6}>
               <List>     
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="Leer mas">
                      ➕
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                    <img src={imagen} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography>{titulo}</Typography> 
                  </ListItemText>
                    
                    
                  
                </ListItem>
              
            </List>
        </Grid>
        </Box>
     
    )
  }

  
  
  export default PeliculaItem
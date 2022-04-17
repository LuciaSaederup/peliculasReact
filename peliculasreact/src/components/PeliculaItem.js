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
import { positions } from '@mui/system';
import { styled } from '@mui/material/styles';

// flexGrow: 1, 


const PeliculaItem = ({titulo, imagen, link, id}) => {
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  
  
  return(
    <Box id={id}>
            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="leer mas">
                        ➕
                    </IconButton>}>
                  <ListItemAvatar>
                    <Avatar>
                    {imagen}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={titulo} />

                </ListItem>
              
            </List>
          </Box>
        )}
  
  

  
  export default PeliculaItem
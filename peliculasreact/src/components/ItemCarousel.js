import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { positions } from '@mui/system';


const ItemCarousel = ({titulo, imagen, id, descripcion}) => {
    
    return (
        <Link to={`/detalle/${id}`} style={{textDecoration:"none"}}>
        <ImageList sx={{ width: 600, height: 500, ml:'20px' }}>
          
        <ImageListItem key={id} sx={{ width: 300, height: 300 }} >
          <img
            src={imagen}
            srcSet={imagen}
            alt={titulo}
          />
          <ImageListItemBar sx={{ height: 100 }}
            title={titulo}
            subtitle={descripcion}
           
          />
        </ImageListItem>
    
    </ImageList>
            
                {/* <Box sx={{display:"flex",                

             }}> */}
                    {/* <CardMedia 
                        sx={{width:350, display:"flex", justifyContent:"center", alignItems:"center", zIndex:2, position:'relative',
                        
                    }}
                        component="img"
                        image = {imagen}
                        alt={titulo}
                    />
                </Box>
    
                <CardContent sx={{display:"flex", 
                bgcolor:'green',
                position:"center",
                zIndex: 2,
                color:'black',
                }}>
                <Typography variant="subtitle1" fontWeight= "bold" color="black">
                    {titulo}
                 </Typography>
                </CardContent> */}
            
        </Link>

    )
}

export default ItemCarousel;
 
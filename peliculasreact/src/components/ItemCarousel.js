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
        <ImageList sx={{ width: 600, height: 400, ml:'20px', mr:'20px' }}>
          
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
            
              
            
        </Link>

    )
}

export default ItemCarousel;
 
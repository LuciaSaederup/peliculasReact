import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const TarjetaBusqueda = ({imagen, titulo, id, tipo}) => {

    return (
        <Card sx={{bgcolor:"transparent", m:1, width:300}} key={id}>
           
                <Box sx={{display:"flex"}}>
                    <CardMedia 
                    sx={{width:300}}
                    component="img"
                    image = {imagen}
                    alt={titulo}
                    />
                </Box>
                <Typography  sx={{p:3}}
                    variant="subtitle1" 
                    fontWeight= "bold" 
                    textAlign="center" 
                    color="#1976D2"
                >
                    {titulo}
                </Typography>
        </Card>
    )
}

export default TarjetaBusqueda;
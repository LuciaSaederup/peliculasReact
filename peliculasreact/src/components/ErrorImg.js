import error404 from "../img/notFound.png"
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const ErrorImg = ({mostrarError})=>{
    return (
        mostrarError &&
        <Box sx={{mt:25}}>
            <CardMedia sx={{width:700}}
                component="img"
                image = {error404}
                alt="error 404"
            />
        </Box>
        
    )
}

export default ErrorImg;
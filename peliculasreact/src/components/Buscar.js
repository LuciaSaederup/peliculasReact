import { useEffect, useState, useContext } from 'react';
import {useSearchParams} from "react-router-dom";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TarjetaBusqueda from './TarjetaBusqueda';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import notFound from "../img/notFound.png";
import ErrorImg from "./ErrorImg";
import { Link } from "react-router-dom"



const Buscar = () => {
    const [peliculas, setPeliculas] = useState([])
    const [busqueda, setBusqueda] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [mostrarError, setMostrarError]=useState(false);

    const [searchParams, setSearchParams] = useSearchParams({
        query:""
    })
        
    useEffect(()=>{
        fetch (`https://api.themoviedb.org/3/search/movie?api_key=14dee5a9be1ea64bcdee2b6e99a5c61c&query=${busqueda}&page=1`)
        .then(res => res.json())
        .then(data => {
            setPeliculas(data.results)
            setTotalPage(data.total_pages)
        })
    },[busqueda, page])
    console.log(peliculas)
    const handleSubmit = (e) => {
        e.preventDefault()
        peliculas === "" && setMostrarError(true)
        console.log(peliculas)
    }        

    
    const handleChangeInput = (e) => {
        setSearchParams({
            query: e.target.value
        })
    }
    
    const handleClick = () => {
        setBusqueda(searchParams.get("query"))

    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    return(
        <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", mt:20}}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', width: 400}}
                onClick={handleSubmit}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder= 'buscar'
                    inputProps={{ 'aria-label':'buscar'}}
                    onChange={handleChangeInput}
                    value={searchParams.get("query")}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search"  onClick={handleClick}>
                    <SearchIcon/>
                </IconButton>        
            </Paper>

            <Box sx={{
                display:"flex", 
                flexDirection:"column", 
                alignItems:"center", mt:5, 
                position:"relative"
            }}>
            
                            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    {peliculas && peliculas.map((pelicula)=>(
                        <Link to={`/detalle/${pelicula.id}`} style={{textDecoration:"none"}}> 

                        <TarjetaBusqueda
                            imagen= {
                                pelicula.poster_path ?
                                `https://image.tmdb.org/t/p/original/${pelicula.poster_path}` 
                                : notFound
                            }
                            titulo= {pelicula.title ? pelicula.title : pelicula.name}
                            id= {pelicula.id}
                            tipo= {pelicula.media_type}    
                        />
                        </Link>
                    ))}
                </Box>
                {mostrarError && <ErrorImg/>}
                <Box sx={{m:4, bgcolor:"#1565C0", borderRadius:2}}>
                
                    <Stack spacing={2}>
                        <Pagination count={totalPage > 500 ? 500 : totalPage} page={page} 
                        onChange={handleChange} color="primary"
                        />
                    </Stack>
                </Box>
            </Box>
            
        </Container>


    )
}

                  
    export default Buscar;
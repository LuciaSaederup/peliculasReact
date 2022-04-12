// import React from 'react';
// import { useState, useEffect } from "react"
// import ApiKey from "/Variables"
// import LinkApi from "/Variables"
// import Carousel from "react"
// import Item from "react"
// import Paper from "react"
// import Button from "react"

// const Carrousel=()=>{
//     const [peliculasTrending, setPeliculasTrending] = useState([])
//   useEffect(() => {
//     fetch(`${LinkApi}/trending/movie/week?${ApiKey}language=es-AR&page=1`)
//     .then(res => res.json())
//     .then(data => setPeliculasTrending(data.results))
//   }, [])
//     console.log(peliculasTrending)
    
//     return (
//         <Carousel>
//             {
//                 peliculasTrending.map( (pelicula) => <Item key={pelicula.id} item={pelicula.titulo} /> )
//             }
//          </Carousel>
//   )
  
//  }
  
  
// //  const Item=()=>
// //  {
// //      return (         
// //        <Paper>
// //            <h2>{pelicula.titulo}</h2>
// //            <p>{props.item.description}</p>
// //            <Button className="CheckButton">
// //            Check it out!
// //            </Button>
// //        </Paper>
// //     )
// // }


  

//  export default Carrousel;
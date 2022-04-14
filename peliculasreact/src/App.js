import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Populares from "./components/Populares"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



const App=()=> {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/populares" element={<Populares />} />
          {/* <Route path="/ultimos-lanzamientos" element={<UtimosLanzamientos />} />*/}
          {/* <Route path="/buscar" element={<Buscar />} />  */} 
        </Routes>
      </BrowserRouter>
  )
}



export default App;

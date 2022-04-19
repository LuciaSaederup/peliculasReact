import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Populares from "./components/Populares"
import Detalle from "./components/Detalle"
import Buscar from "./components/Buscar"
import UltimosLanzamientos from "./components/UltimosLanzamientos"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


const App=()=> {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: "100vh" }}>
          <div style={{ flexGrow: 1 }}>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/populares" element={<Populares />} />
              <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} />
              <Route path="/buscar" element={<Buscar />} />
              <Route path="/detalle/:idPelicula" element={<Detalle />} /> 
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
  )
}



export default App;

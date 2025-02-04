import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router";
import logo from "./assets/logo.avif";
import gmail from "./assets/gmail.avif";
import youtube from "./assets/yt.avif";
import instagram from "./assets/insta.avif";
import facebook from "./assets/facebook.avif";
import tiktok from "./assets/tiktok.avif";
import whatsapp from "./assets/ws.avif";
import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos";
import "./App.css";
import React from "react";
import Navbar from "./NavBar/Navbar";
import ProyectosDetalle from "./pages/Proyectos/ProyectosDetalle";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const imagenes = [gmail, youtube, instagram, facebook, tiktok, whatsapp];
  const location = useLocation();
  return (
    <>
      <header>
        <Navbar />

        {/* Ocultar este div en páginas de productos */}
        {!location.pathname.startsWith("/trabajos/") && (
          <div className="p-2 flex flex-col  justify-center items-center lg:flex-row lg:justify-between containers mx-auto">
            <img className="lg:w-[500px]" src={logo} alt="Logo" width={280} />
            <ul id="redes" className="flex justify-center gap-2">
              {imagenes.map((imagen) => (
                <li key={imagen}>
                  <img src={imagen} alt="logos red social" width={40} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Proyectos />} />
        <Route path="/trabajos/:slug" element={<ProyectosDetalle />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

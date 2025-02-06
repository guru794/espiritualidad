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
  const logos = [
    { logo: gmail, url: "mailto:paginaoficial@wwwanasuarez300.com" },
    { logo: youtube, url: "" },
    { logo: instagram, url: "" },
    {
      logo: facebook,
      url: "",
    },
    { logo: tiktok, url: "https://www.tiktok.com/@anasuarez300" },
    {
      logo: whatsapp,
      url: "https://wa.me/+14076153864?text=Hola,%20quiero%20más%20información",
    },
  ];

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
              {logos.map((logo) => (
                <li key={logo.url}>
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    <img src={logo.logo} alt="logos red social" width={40} />
                  </a>
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
      <div className="fixed bottom-5 right-5 z-50">
        <a
          className=" flex items-center text-white font-bold bg-green-400 rounded-full px-4 py-2 drop-shadow-xl transition-transform transform hover:scale-110"
          href={logos[5].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logos[5].logo}
            alt="WhatsApp"
            width={40}
            className="drop-shadow-lg transition-transform transform hover:scale-110"
          />
          <span>Escribeme</span>
        </a>
      </div>
    </>
  );
}

export default App;

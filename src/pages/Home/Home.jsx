import React from "react";
import heroImage from "../../assets/heroImage.avif";
import { Link } from "react-router-dom";
import Carousel from "./Componentes/Carousel";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="font-display">
      <Helmet>
        <title>Asesora | Ana Suarez</title>
        <meta
          name="description"
          content="Recibe una consulta gratuita sobre amarres espirituales positivos. Descubre cómo mejorar tu vida amorosa con energía positiva."
        />
        <meta
          name="keywords"
          content="amarres de amor, consulta gratis, energía positiva, unión de parejas, rituales espirituales"
        />
        <meta name="author" content="Tu Nombre o Marca" />
        <link rel="canonical" href="https://https://wwwanasuarez300.com/" />
      </Helmet>
      <Hero />
      <Tutoriales />
      <Footer />
    </div>
  );
};

export default Home;

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img className="max-w-xl" src={heroImage} alt="Imagen de Hero" />
      <Link to={"/"}>
        <div className="bg-black text-white border border-amber-700 py-2 px-12 rounded-full lg:py-4 lg:px-24">
          <span>Trabajos para ti</span>
        </div>
      </Link>
    </div>
  );
};

const Tutoriales = () => {
  return (
    <div id="tutoriales" className="pt-12">
      <h2 className=" uppercase text-white text-center text-3xl lg:text-6xl font-semibold">
        hechizos para ti
      </h2>
      <Carousel />
      <div className="py-12 flex justify-center">
        <a
          href="https://www.youtube.com/@anasuarezoficial6145"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="bg-red-500 text-white py-2 px-12 rounded-full shadow-[0px_4px_2px_1px_#90CEF4A9]">
            <span className="uppercase">Ir a YouTube</span>
          </div>
        </a>
      </div>
    </div>
  );
};

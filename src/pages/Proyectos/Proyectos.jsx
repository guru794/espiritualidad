import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { trabajos } from "../../data/data"; // Importa los datos
import Formulario from "./Componentes/formulario";
import contactameImg from "../../assets/contacto.avif";

const Proyectos = () => {
  useEffect(() => {
    document.title = "Mis trabajos | Ana Suarez";
  }, []);

  return (
    <div className="container mx-auto font-display">
      <div className="grid grid-cols-1 gap-4 container place-items-center">
        <h2 className="uppercase text-white text-center text-2xl lg:text-6xl lg:py-4 font-semibold">
          MIS TRABAJOS GARANTIZADOS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
          {trabajos.map((trabajo) => (
            <Card
              key={trabajo.id}
              slug={trabajo.slug}
              url={trabajo.url}
              titulo={trabajo.titulo}
              precio={trabajo.precio}
              subtitulo={trabajo.subtitulo}
            />
          ))}
        </div>

        <Contacto />
      </div>
    </div>
  );
};

const Card = ({ slug, url, titulo, precio, subtitulo }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/trabajos/${slug}`);
  };

  return (
    <div
      className="relative text-white flex flex-col gap-2 cursor-pointer mb-8"
      onClick={handleNavigate} // Redirige al hacer clic en cualquier parte de la tarjeta
    >
      <img
        src={url}
        alt={titulo}
        className="w-[260px] h-[260px] object-cover rounded-md lg:w-[220px] lg:h-[220px]"
      />
      <p className="absolute text-sm text-white bg-[#5D1FF2] top-0 px-2 pb-1">
        {subtitulo}
      </p>
      <p className="text-lg font-semibold mt-2 uppercase">{titulo}</p>
      <p className="text-xl font-bold">{precio}</p>

      {/* Evita la navegación al hacer clic en el botón */}
      {/* <button
        className="capitalize bg-[#242424] py-3 hover:bg-gray-700 transition-all rounded-md"
        onClick={(e) => e.stopPropagation()} // Detiene la propagación del evento de clic
      >
        Agregar al carrito
      </button> */}
    </div>
  );
};

const Contacto = () => {
  return (
    <div className="containers">
      <div className="grid gap-2 place-items-center lg:grid-cols-2 lg:bg-[#1F0337] lg:py-8 lg:place-items-center mb-12">
        <img src={contactameImg} alt="Contacto" />
        <div className="w-full max-w-md">
          <div className="uppercase bg-[#1F0337] text-white text-2xl p-4 lg:text-5xl lg:text-center lg:mb-12 grid gap-4">
            <p>Te escribo</p>
            <p>¡Yo sí te ayudo!</p>
          </div>
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;

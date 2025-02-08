import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { trabajos } from "../../data/data"; // Importa los datos
import Formulario from "./Componentes/formulario";
import contactameImg from "../../assets/contacto.avif";
import { Helmet } from "react-helmet";

const Proyectos = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="container mx-auto font-display">
      <Helmet>
        <title>Mis trabajos | Ana Suarez</title>
        <meta
          name="description"
          content="Recibe una consulta gratuita sobre amarres espirituales positivos. Descubre cómo mejorar tu vida amorosa con energía positiva."
        />
        <meta
          name="keywords"
          content="amarres de amor, consulta gratis, energía positiva, unión de parejas, rituales espirituales"
        />
        <meta name="author" content="Tu Nombre o Marca" />
        <link rel="canonical" href="https://wwwanasuarez300.com/" />
      </Helmet>

      <section className=" flex justify-center">
        <div className="bg-[#1F0337] text-white p-2 md:p-6 mx-2 rounded-2xl shadow-lg text-center w-full max-w-3xl">
          <h1 className="text-xl md:text-5xl font-bold uppercase pb-2 md:pb-6">
            🔮 ¡Primera consulta GRATIS! 🔮
          </h1>
          <div className="bg-purple-900 rounded-2xl py-4 ">
            <p className="mt-3 text-lg">
              ¿Tienes dudas sobre tu situación amorosa? Permíteme ayudarte con
              mis trabajos espirituales.
            </p>
            <p className="mt-2 font-semibold">
              🌟 Agenda tu primera consulta gratuita y descubre cómo puedo
              guiarte.
            </p>
            <button
              onClick={scrollToForm}
              className="mt-4 bg-white text-purple-600 font-bold px-5 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Contactame ⬇️
            </button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 container place-items-center">
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
      </section>
      <Contacto formRef={formRef} />
    </main>
  );
};

const Card = ({ slug, url, titulo, precio, subtitulo }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/trabajos/${slug}`);
  };

  return (
    <article
      className="relative text-white flex flex-col gap-2 cursor-pointer mb-8"
      onClick={handleNavigate} // Redirige al hacer clic en cualquier parte de la tarjeta
    >
      <img
        src={url}
        alt={`Vista previa del proyecto: ${titulo}`}
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
    </article>
  );
};

const Contacto = ({ formRef }) => {
  return (
    <section ref={formRef} className="containers mx-auto ">
      <div className="grid gap-2 place-items-center lg:grid-cols-2 lg:bg-[#1F0337] lg:p-8 lg:place-items-center mb-12">
        <img src={contactameImg} alt="Contacto" />
        <div className="w-full max-w-md">
          <div className="uppercase bg-[#1F0337] text-white text-2xl p-4 lg:text-5xl lg:text-center lg:mb-12 grid gap-4">
            <p>Te escribo</p>
            <p>¡Yo sí te ayudo!</p>
          </div>
          <Formulario />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;

import React, { useEffect } from "react";
import Carousel from "./Componentes/Carousel";
import { Link, useNavigate, useParams } from "react-router-dom";
import { trabajos } from "../../data/data";

const ProyectosDetalle = () => {
  let navigate = useNavigate();
  const { slug } = useParams();
  const trabajo = trabajos.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = trabajo.titulo;
  }, []);

  const siguienteTrabajo = () => {
    const indexTrabajoActual = trabajos.findIndex((item) => item.slug === slug);
    if (indexTrabajoActual < trabajos.length - 1) {
      const siguiente = trabajos[indexTrabajoActual + 1];
      navigate(`/trabajos/${siguiente.slug}`);
    } else {
      alert("Este es el último trabajo");
    }
  };

  const anteriorTrabajo = () => {
    const indexTrabajoActual = trabajos.findIndex((item) => item.slug === slug);
    if (indexTrabajoActual > 0) {
      const anterior = trabajos[indexTrabajoActual - 1];
      navigate(`/trabajos/${anterior.slug}`);
    } else {
      alert("Este es el primer trabajo");
    }
  };
  return (
    <div className="  px-4 bg-white mb-8 font-display">
      <div className="containers mx-auto">
        <div className=" flex justify-between text-gray-700 text-[14px] py-12 px-6">
          <Link to="/">
            <span className="hidden sm:block">{`Inicio / ${trabajo.titulo}`}</span>
          </Link>
          <div className="flex gap-2">
            <button onClick={anteriorTrabajo}>{"Anterior"}</button>
            <span>/</span>
            <button onClick={siguienteTrabajo}>{"Siguiente"}</button>
          </div>
        </div>
        <Carousel imagenes={trabajo.imagenes} />
        <div className="grid lg:grid-cols-[60%_40%] ">
          <div className="mt-12 pb-12">
            <h1 className="text-2xl font-semibold mt-2">{trabajo.titulo}</h1>
            <span className="text-gray-500 text-[11px] uppercase">
              SKU: {trabajo.titulo}
            </span>
            <p className="text-xl text-gray-700 font-medium mt-1">
              {" "}
              {trabajo.precio}
            </p>
            <p className=" text-[16px] mt-1 text-gray-500 lg:text-lg">
              {" "}
              {trabajo.descr}
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProyectosDetalle;

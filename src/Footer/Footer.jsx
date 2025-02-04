import React from "react";
import quiensoy from "../assets/quiensoy.avif";

const Footer = () => {
  return (
    <footer
      id="quien-soy"
      className=" containers mx-auto grid gap-4 justify-items-center text-white  bg-image lg:grid-cols-2 lg:my-12"
    >
      <div className="flex justify-center flex-col items-center gap-4 lg:justify-start lg:pt-12 lg:gap-12">
        <h3 className=" uppercase text-center text-3xl px-4 lg:text-5xl lg:px-28">
          DESCUBRE QUIÉN SOY
        </h3>
        <p className=" text-center px-12 font-light lg:px-28 lg:text-left lg:text-lg">
          Soy Ana Suarez una chica que nació con un talento para inerpretar
          nuestro universo de formas que en ocasiones ni siquiera yo puedo
          explicar, desde pequeña he podido atraer la espiritualidad a mi ser la
          cual ha sido forjada por grandes obstáculos que me permitieron
          conectarme mas con mi talento nato, logrando así mantener una energía
          pura y limpia que he aprendido a canalizar y compartir para potenciar
          leyes de atracción tan poderosas que muchos dirán que son otras cosas.
          Las leyes del universo, de la vida, del tiempo de la espiritualidad
          pero sobre todo de nuestra mente y nuestra alma son todo lo que
          necesitas para lograr lo que quieras.
        </p>
        <a href="#redes" rel="noopener noreferrer" className="">
          <div className="bg-[#5D1FF2] text-white py-2 px-8 ">
            <span className="">Sígueme</span>
          </div>
        </a>
      </div>
      <img className="max-w-[600px] h-full" src={quiensoy} alt="" />
    </footer>
  );
};

export default Footer;

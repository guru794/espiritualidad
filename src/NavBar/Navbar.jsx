import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import icon from "../assets/burger_icon.png";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setActive(false);
    navigate("/home");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (active) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <nav>
      <div className="relative flex justify-end items-center text-white gap-4 h-[40px] lg:hidden ">
        <span>MENU</span>
        <div>
          <button
            onClick={() => setActive(!active)}
            className={`rounded-full bg-white h-10 w-10 flex justify-center items-center text-black ${
              active ? " z-50" : ""
            }`}
          >
            <img src={icon} alt="menu icon burger" width={30} />
          </button>
          <div
            className={` absolute right-0 z-50 w-2/3 pr-8 text-right bg-image h-screen overflow-hidden transition-all duration-500 ease-in-out text-white ${
              active ? "" : "translate-x-full invisible"
            }`}
          >
            <Links
              active={active}
              setActive={setActive}
              isActive={isActive}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Links
          active={active}
          setActive={setActive}
          isActive={isActive}
          scrollToSection={scrollToSection}
        />
      </div>
    </nav>
  );
};

const Links = ({ active, setActive, isActive, scrollToSection }) => {
  return (
    <ul
      className={`transition-all duration-500 ease-in-out overflow-hidden text-white text-3xl py-4 lg:opacity-100 lg:flex lg:justify-end lg:gap-8 lg:text-base lg:mx-auto containers lg:mt-12  ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <li>
        <Link
          to="/home"
          onClick={() => setActive(false)}
          className={`hover:text-yellow-500 ${
            isActive("/home") ? "text-yellow-500" : ""
          }`}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() => setActive(false)}
          className={isActive("/") ? "text-yellow-500" : ""}
        >
          MIS TRABAJOS
        </Link>
      </li>
      <li>
        <button
          onClick={() => {
            scrollToSection("tutoriales");
            setActive(false);
          }}
          className="hover:text-yellow-500"
        >
          TUTORIALES
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            scrollToSection("quien-soy");
            setActive(false);
          }}
          className="hover:text-yellow-500"
        >
          ACERCA DE MI
        </button>
      </li>
    </ul>
  );
};

export default Navbar;

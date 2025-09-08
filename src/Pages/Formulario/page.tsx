import React from "react";
import Footer from "../../Components/footer/page";
import Header from "../../Components/header/page";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div>
      <Header />
      <section className="bg-white py-12 px-[10%]">
        <h2 className="text-2xl text-center font-bold text-[#0078d7] mb-3">
          Registro
        </h2>

        <p className="text-[15px] text-center font-bold text-[#0078d7] mb-5">
          Registrate aquí para que dejes de pasar hambre
        </p>

        <form className="max-w-md mx-auto bg-[#f9f9f9] p-8 rounded-md shadow-md flex flex-col gap-5">
          {/* el nombre */}
          <div className="flex flex-col">
            <label
              htmlFor="nombre"
              className="mb-1 font-semibold text-gray-700"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu nombre"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0078d7]"
            />
          </div>

          {/* el correo */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-semibold text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="tu@correo.com"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0078d7]"
            />
          </div>

          {/* la contraseña */}
          <div className="flex flex-col">
            <label
              htmlFor="contraseña"
              className="mb-1 font-semibold text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              placeholder="••••••••"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0078d7]"
            />
          </div>

          {/* el confirmar Contraseña */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmarContraseña"
              className="mb-1 font-semibold text-gray-700"
            >
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmarContraseña"
              placeholder="••••••••"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0078d7]"
            />
          </div>

          {/* enviar por ahi */}

          <Link
            to="/"
            className="bg-[#0078d7] text-white rounded-md py-2 mt-4 hover:bg-[#005a9e] transition-colors duration-300 font-semibold inline-block text-center px-6"
          >
            Registrarse
          </Link>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Registro;

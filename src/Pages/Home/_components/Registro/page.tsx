import React from "react";
import { Link } from "react-router-dom";

const Pregunta_registro: React.FC = () => {
  return (
    <section className="bg-[#0078d7] py-16 px-[10%] text-center text-white rounded-lg my-12">
      <h2 className="text-3xl font-bold mb-4">¿Sin cuenta?</h2>
      <p className="mb-6 text-lg">
        Únete a nosotros y empieza a disfrutar de todos nuestros servicios. ¡Es
        rápido y fácil!
      </p>

      <Link to="/registro">
        <button className="bg-white text-[#0078d7] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300">
          Regístrate ahora
        </button>
      </Link>
    </section>
  );
};

export default Pregunta_registro;

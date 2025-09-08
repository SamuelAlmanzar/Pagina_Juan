import React from "react";

const welcome = () => {
  return (
    <section className="flex justify-between items-center px-[13em] pr-[15em] h-screen">
      <div className="max-w-[500px]">
        <h1 className="text-[2em] text-[#0078d7] font-bold">
          Bienvenido a Jtacell
        </h1>
        <p className="leading-relaxed mt-4">
          Donde nos especializamos en devolverle la vida a tu celular. Reparamos
          pantallas, baterías, software y mucho más, con rapidez y confianza. Tu
          dispositivo en buenas manos, como nuevo otra vez.
        </p>
        <a href="#habilidades">
          <button className="bg-[#0078d7] border-none px-5 py-2.5 text-white rounded hover:bg-[#005a9e] mt-4 cursor-pointer transition-colors duration-300">
            Comencemos
          </button>
        </a>
      </div>
      <div className="w-[180px] h-[180px] rounded-full bg-[#ddd] flex items-center justify-center overflow-hidden">
        <img src="" alt="Avatar" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default welcome;

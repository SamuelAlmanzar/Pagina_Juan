import React from "react";


function scroll(e:any) { 
  e.preventDefault()
     const seccion = document.getElementById("habilidades");
    seccion?.scrollIntoView({ behavior: "smooth" });
}
const welcome = () => {
  return (
    <section  id="inicio" className="bg-[#f5f7fa] flex justify-between items-center px-[13em] pr-[15em] h-[100vh] ">
      <div className="max-w-[500px]">
        <h1 className="text-[2em] text-[#0078d7] font-bold">
          Bienvenido a Jtacell
        </h1>
        <p className="leading-relaxed mt-4">
          Donde nos especializamos en devolverle la vida a tu celular. Reparamos
          pantallas, baterías, software y mucho más, con rapidez y confianza. Tu
          dispositivo en buenas manos, como nuevo otra vez.
        </p>
        <a href="../Skills/page">
          <button onClick={scroll} className="bg-[#0078d7] border-none px-10 py-2.5 text-white rounded hover:bg-[#005a9e] mt-4 cursor-pointer transition-colors duration-300">
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

import React from "react";

function scroll(e:any) { 
  e.preventDefault()
     const seccion = document.getElementById("inicio");
    seccion?.scrollIntoView({ behavior: "smooth" });
}

const Footer = () => {
    return( 
        <footer className="bg-[#1e1e2f] text-white py-8 flex flex-col">
      <div className="flex flex-wrap justify-around">
        {/* Sobre nosotros */}
        <div className="flex-1 min-w-[200px] m-2">
          <h2 className="text-xl font-bold mb-2">Sobre nosotros</h2>
          <p>
            Somos un negocio comprometido en darte confianza, calidad y un
            servicio que siempre busca tu tranquilidad.
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex-1 min-w-[200px] m-2">
          <h2 className="text-xl font-bold mb-2">Enlaces rápidos</h2>
          <ul className="space-y-1">
            <li>
              <a onClick={scroll} href="#inicio" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:underline">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex-1 min-w-[200px] m-2">
          <h2 className="text-xl font-bold mb-2">Contacto</h2>
          <p>Fisicamente en Santo Domingo</p>
          <p>Pero mentalmente en Haití</p>
          <p>(809) 123-4567 (no me escriba que no ando en gente)</p>
          <p>toy_halto_en_solo_dos_dias@gmail.com</p>
        </div>
      </div>

      {/* Copy */}
      <div className="text-center mt-6">
        <p>Derechos en reservación pa que no se queje.</p>
      </div>
    </footer>
    )
}

export default Footer;
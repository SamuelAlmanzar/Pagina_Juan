import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-[#1e1e2f] text-white px-4 py-5 flex flex-row justify-between">
      <img src="" alt="Logo" className="bg-[#0078d7] size-14 border-f rounded-full" />
      <nav className="justify-end text-center mt-5">
        <ul className="flex flex-row gap-3">
            <li>Ayuda</li>
            <li>Contactos</li>
            <li>Direccion</li>
            <li>Mas</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

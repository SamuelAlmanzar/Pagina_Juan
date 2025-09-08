import React from "react";

interface TestimonioCardProps {
  imagen?: string;
  nombre?: string;
  mensaje: string;
}

const TestimonioCard = ({ imagen, nombre, mensaje }: TestimonioCardProps) => {
  return (
     <div className="bg-white shadow-md rounded-md p-6 w-full max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imagen}
          alt={`Foto de ${nombre}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold text-[#1e1e2f]">{nombre}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{mensaje}</p>
    </div>
  );
};

export default TestimonioCard;

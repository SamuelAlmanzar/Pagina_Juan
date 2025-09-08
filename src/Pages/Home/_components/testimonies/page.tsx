import React from "react";
import TestimonioCard from "../../../../Components/ui/testimoniesCard/page";

const Testimonies = () => {
    return (
         <section id="testimonios" className="py-12 px-[10%] bg-[#f9f9f9]">
      <h2 className="text-center mb-10 text-[#0078d7] text-3xl font-bold">
        Testimonios
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <TestimonioCard
          imagen="../../../../../public/primera mujer.jpg"
          nombre="Luisa Alcántara"
          mensaje="¡Excelente servicio! Mi celular estaba completamente roto y en menos de un día quedó como nuevo. La atención fue muy cordial y me explicaron todo el proceso paso a paso."
        />
        <TestimonioCard
          imagen="../../../../../public/SEgunda mujer.jpg"
          nombre="Rosa Melano"
          mensaje="Muy recomendable. Cambiaron la batería de mi teléfono y ahora dura muchísimo más que antes. Se nota que usan repuestos de calidad y trabajan con rapidez."
        />
        <TestimonioCard
          imagen="../../../../../public/Tercera mujer.jpg"
          nombre="Abril Melano"
          mensaje="Tenía problemas de software y lentitud en mi celular. Después de llevarlo aquí funciona fluido y sin errores. Me dieron confianza y cumplieron con lo prometido."
        />
      </div>
    </section>
    )
}

export default Testimonies;
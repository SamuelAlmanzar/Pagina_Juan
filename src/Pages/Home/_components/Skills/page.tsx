import React from "react";
import SkillsCard from "../../../../Components/ui/SkillsCard/page";

const Skills = () => {
  return (
    <section id="habilidades" className="py-[20px] px-[5%] bg-white h-[100vh]">
      <h2 className="text-center mb-8 text-[#0078d7] text-3xl font-bold">
        Nuestras Habilidades
      </h2>

      <div className="flex flex-wrap justify-center">
        <SkillsCard
          titulo="Reparación de pantallas"
          descripcion="Solucionamos todo tipo de daños en pantallas, ya sean rayones, grietas o incluso cuando dejan de responder al tacto. Usamos repuestos de la mejor calidad para que la imagen se vea nítida y el touch funcione como el primer día. Nuestro objetivo es que no notes la diferencia entre tu pantalla original y la reparada."
        />
        <SkillsCard
          titulo="Cambio de baterías"
          descripcion="Devolvemos la energía a tu celular con baterías nuevas, certificadas y de alto rendimiento. Si tu móvil se descarga rápido, se apaga sin razón o tarda horas en cargar, nosotros lo dejamos listo para aguantar el ritmo de tu día a día. Con nuestro servicio, tendrás la tranquilidad de contar con una batería duradera y segura."
        />
        <SkillsCard
          titulo="Software y optimización"
          descripcion="Arreglamos problemas de sistema operativo, fallos de aplicaciones, lentitud y errores molestos que no te dejan disfrutar de tu celular. Ya sea actualizar el sistema, liberar espacio o eliminar virus, optimizamos tu dispositivo para que funcione de forma fluida, rápida y sin interrupciones."
        />
      </div>
    </section>
  );
};

export default Skills;

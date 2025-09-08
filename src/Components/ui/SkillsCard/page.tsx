import React from "react";

interface SkillsCardProps {
  titulo: string;
  descripcion: string;
}

const SkillsCard = ({ titulo, descripcion }: SkillsCardProps) => {
  return (
    <div className="bg-[#f0f2f5] w-[500px] max-w-2xl mx-auto mb-6 p-6 rounded-md shadow-sm">
      <h3 className="mb-3 text-[#1e1e2f] text-lg font-bold">{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default SkillsCard;

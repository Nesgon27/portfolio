export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Intensibe Web",
    period: "Enero 2025 – Actualidad",
    description:
      "Desarrollo de aplicaciones y sitios web para clientes utilizando React, TypeScript, Tailwind CSS, APIs REST y tecnologías modernas.",
  },
  {
    role: "Auxiliar Administrativo",
    company: "Banco Agrícola",
    period: "Abril 2016 – Enero 2025",
    description:
      "Gestión de operaciones, coordinación de actividades, seguimiento de procesos y resolución de incidencias.",
  },
];

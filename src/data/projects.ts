export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Sabor Casero SV",
    description:
      "Marketplace orientado al mercado salvadoreño para conectar consumidores con vendedores de comida casera.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
  },
  {
    title: "JDM Cleaning",
    description:
      "Landing page responsive desarrollada para un cliente con enfoque Mobile First y experiencia de usuario.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS", "PHP"],
    category: "Web Development",
  },
  {
    title: "The Game Garden",
    description:
      "Proyecto e-commerce desarrollado y actualizado con WordPress y Elementor.",
    technologies: ["WordPress", "Elementor", "SEO"],
    category: "E-commerce",
  },
  {
    title: "Engel Entertainment",
    description:
      "Actualización y desarrollo de páginas e-commerce, plugins y mejoras responsive.",
    technologies: ["WordPress", "Elementor", "SEO"],
    category: "E-commerce",
  },
  {
    title: "Omniae",
    description:
      "Landing page desarrollada con React, componentes reutilizables e integración de APIs.",
    technologies: ["React", "APIs", "Responsive Design"],
    category: "Frontend",
  },
  {
    title: "Mister Choco",
    description:
      "Desarrollo de sitio web responsive con mejoras visuales y de experiencia de usuario.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
    category: "Web Development",
  },
];

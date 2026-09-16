import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Proyectos
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Proyectos destacados
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

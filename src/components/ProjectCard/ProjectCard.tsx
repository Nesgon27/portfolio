import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-400/40">
      <p className="text-sm text-blue-400">{project.category}</p>
      <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
      <p className="mt-4 flex-1 leading-7 text-slate-400">
        {project.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-300"
          >
            {technology}
          </li>
        ))}
      </ul>
      {(project.url || project.github) && (
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 transition hover:text-blue-300"
            >
              Ver sitio
              <span className="sr-only"> de {project.title}</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-white"
            >
              Código
              <span className="sr-only"> de {project.title}</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}

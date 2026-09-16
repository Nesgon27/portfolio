import { skills } from "../../data/skills";

type SkillGroupProps = {
  title: string;
  items: readonly string[];
};

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <ul className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Habilidades
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Tecnologías que utilizo
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Backend & APIs" items={skills.backend} />
          <SkillGroup title="Herramientas & Calidad" items={skills.tools} />
          <SkillGroup
            title="Tecnologías adicionales"
            items={skills.additional}
          />
        </div>
      </div>
    </section>
  );
}

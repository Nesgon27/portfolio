import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Experiencia
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Mi trayectoria</h2>
        <div className="mt-10 space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="border-l border-blue-400/40 pl-6"
            >
              <p className="text-sm text-blue-400">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold">{item.role}</h3>
              <p className="mt-1 font-medium text-slate-300">{item.company}</p>
              <p className="mt-3 leading-7 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

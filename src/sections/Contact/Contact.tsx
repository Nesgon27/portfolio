const EMAIL = "nestor_mg27@outlook.com";

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contacto
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
          Estoy interesado en oportunidades como Frontend Developer y en
          proyectos donde pueda aportar con React y TypeScript.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-block rounded-lg bg-blue-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-300"
        >
          Enviarme un correo
        </a>
        <dl className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          <div>
            <dt className="text-sm uppercase tracking-widest text-slate-500">
              Correo
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${EMAIL}`}
                className="text-slate-300 transition hover:text-blue-400"
              >
                {EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm uppercase tracking-widest text-slate-500">
              Ubicación
            </dt>
            <dd className="mt-1 text-slate-300">
              El Salvador · Disponible en remoto
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

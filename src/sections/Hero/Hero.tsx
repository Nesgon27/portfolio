export default function Hero() {
  return (
    <section id="inicio" className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-400">
            Programador
          </span>
          <h1 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl">
            Néstor <span className="text-blue-400">Méndez</span>
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-200">
            Frontend Developer
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Desarrollo interfaces modernas, responsive y centradas en el usuario
            utilizando React, TypeScript y tecnologías modernas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-lg bg-blue-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-300"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              Contactarme
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 text-6xl font-bold text-blue-400 sm:h-80 sm:w-80 sm:text-7xl"
        >
          NM
        </div>
      </div>
    </section>
  );
}

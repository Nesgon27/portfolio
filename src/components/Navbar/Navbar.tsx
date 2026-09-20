import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Inicio", href: "inicio" },
  { label: "Sobre mí", href: "sobre-mi" },
  { label: "Habilidades", href: "habilidades" },
  { label: "Proyectos", href: "proyectos" },
  { label: "Experiencia", href: "experiencia" },
  { label: "Contacto", href: "contacto" },
];

const CV_URL = "/cv-nestor-mendez.pdf";
const CV_FILENAME = "CV-Nestor-Mendez.pdf";

const linkClass =
  "rounded-md text-sm text-white transition-colors hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#inicio"
          className="rounded-md text-xl font-bold tracking-tight text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        >
          NM
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
          <a
            href={CV_URL}
            download={CV_FILENAME}
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Descargar CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="rounded-md border border-slate-700 p-2 transition hover:border-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-5 w-5"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`${linkClass} block py-1`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CV_URL}
                download={CV_FILENAME}
                onClick={() => setIsOpen(false)}
                className="inline-block rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

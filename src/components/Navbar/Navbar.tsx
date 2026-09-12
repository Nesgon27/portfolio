type navItem = {
    label:string;
    href:string;
}

const navItems: navItem[] = [
    {label:"Home", href:"#home"},
    {label:"About", href:"#about"},
    {label:"Projects", href:"#projects"},
    {label:"Skills", href:"#skills"},
    {label:"Experience", href:"#experience"},
    {label:"Contact", href:"#contact"},
]

export default function Navbar() {

    const newClass = "text-sm text-white transition-colors hover:text-blue-400"  

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="inicio" className="text-xl font-bold tracking-light text-blue-400">
          NM
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.slice(0,6).map((items) => (
            <a 
            key={items.label}
            href={items.href}
            className={newClass}
            >
                {items.label}
            </a>
          ))}
        </div>
        <a href="#download">Download CV</a>
      </nav>
    </header>
  );
}

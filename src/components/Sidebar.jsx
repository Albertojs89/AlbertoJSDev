function Sidebar({ setHoveredSection }) {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];


  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:flex fixed left-8 top-1/3 z-50">
      <div className="relative flex flex-col gap-6 text-sm text-[#ccd6f6] font-medium pl-4">
        {/* Línea vertical */}
        <div className="absolute left-0 top-0 h-full w-[1px] bg-[#ccd6f6]/30" />

        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            onMouseEnter={() => setHoveredSection(link.label)}
            onMouseLeave={() => setHoveredSection(null)}
            className="relative pl-4 text-left group hover:text-[#64ffda] transition-colors"
          >
            {link.label}
           <span
  className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#64ffda] transition-all duration-300 group-hover:w-12"
/>

          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

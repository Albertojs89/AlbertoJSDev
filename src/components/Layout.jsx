import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Layout({ children }) {
  const [activeSection, setActiveSection] = useState(null);
  const [visibleText, setVisibleText] = useState(null);

  const sectionColors = {
    about: {
      bg: 'bg-[#0d1b2a]',           // azul oscuro profundo
      text: 'text-[#64ffda]/10',    // verde agua más llamativo
    },
    skills: {
      bg: 'bg-[#1e2d2f]',           // verde grisáceo oscuro
      text: 'text-[#fbbf24]/10',    // amarillo dorado pastel
    },
    projects: {
      bg: 'bg-[#2c1a2e]',           // vino morado apagado
      text: 'text-[#93c5fd]/10',    // azul cielo desaturado
    },
    contact: {
      bg: 'bg-[#1c1a33]',           // índigo oscuro
      text: 'text-[#fb7185]/10',    // rosado vibrante apagado
    },
  };
  

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Control de visibilidad de texto gigante
  useEffect(() => {
    if (activeSection) {
      setVisibleText(null);
      const timeout = setTimeout(() => {
        setVisibleText(activeSection);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [activeSection]);

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-1000 ease-in-out overflow-hidden 
      ${sectionColors[activeSection]?.bg || 'bg-[#131b24]'} text-[#ccd6f6]`}>
      
      <Sidebar activeSection={activeSection} />

      {/* Texto grande de fondo */}
      <div className="pointer-events-none fixed left-[10%] top-1/3 transform -translate-y-1/2 z-0">
        <h1
          className={`text-[16vw] font-bold uppercase tracking-widest transition-all duration-500 transform
            ${sectionColors[activeSection]?.text || 'text-[#ccd6f6]/5'}
            ${visibleText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        >
          {visibleText}
        </h1>
      </div>

      <main className="pt-32 px-6 lg:px-16 xl:px-24 max-w-[1600px] mx-auto space-y-32">
        {children}
      </main>
    </div>
  );
}

export default Layout;

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Layout({ children }) {
  const [activeSection, setActiveSection] = useState(null);
  const [visibleText, setVisibleText] = useState(null);

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Observer para detectar qué sección está en el viewport
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
      threshold: 0.2, // Aumentamos la sensibilidad
      rootMargin: "0px 0px -10% 0px", // Mejor detección en móviles
    }
  );

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}, []);


  // Delay para transiciones suaves del texto grande
  useEffect(() => {
    if (activeSection) {
      setVisibleText(null); // Forzar salida
      const timeout = setTimeout(() => {
        setVisibleText(activeSection);
      }, 300); // sincronizado con la animación de salida
      return () => clearTimeout(timeout);
    }
  }, [activeSection]);

  return (
    <div className="relative min-h-screen bg-[#131b24] text-[#ccd6f6] font-sans transition-opacity duration-1000 ease-in-out">
      <Sidebar activeSection={activeSection} />

      {/* Texto grande de fondo */}
      <div className="pointer-events-none fixed left-[10%] top-1/3 transform -translate-y-1/2 z-0">
        <h1
          className={`text-[16vw] font-bold uppercase tracking-widest text-[#ccd6f6]/5 transition-all duration-500 transform
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

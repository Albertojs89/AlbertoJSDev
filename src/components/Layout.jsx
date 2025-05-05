import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Layout({ children }) {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [visibleText, setVisibleText] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
  if (hoveredSection) {
    setVisibleText(hoveredSection);
  } else {
    // Espera antes de borrar para que dé tiempo a animar
    const timeout = setTimeout(() => {
      setVisibleText(null);
    }, 500); // igual a duration-500
    return () => clearTimeout(timeout);
  }
}, [hoveredSection]);


  return (
    <div className="relative min-h-screen bg-[#131b24] text-[#ccd6f6] font-sans transition-opacity duration-1000 ease-in-out">

      <Sidebar setHoveredSection={setHoveredSection} />

      {/* Texto grande de fondo */}
      <div className="pointer-events-none fixed left-[10%] top-1/3 transform -translate-y-1/2 z-0">
        <h1
          className={`text-[16vw] font-bold uppercase tracking-widest text-[#ccd6f6]/5 transition-all duration-500 transform
            ${hoveredSection ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        >
          {visibleText}
        </h1>
      </div>



      <main className="relative z-10 pt-32 px-8 lg:px-32 max-w-5xl mx-auto space-y-32">

        {children}
      </main>
    </div>
  );
}

export default Layout;

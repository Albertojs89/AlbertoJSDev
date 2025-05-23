import { useEffect } from 'react';
import '../assets/detalles.css';


import { Link } from 'react-router-dom';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaArrowLeft,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

function XaviDetalles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen py-16 px-4 text-center bg-[#131b24] text-[#ccd6f6] fondo-con-luz">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Video del proyecto */}
        <div className="relative w-full max-w-[720px] mx-auto mb-8 rounded-xl overflow-hidden shadow-lg group">
          <video
            src="/videos/proyecto1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Título y descripción */}
        <h1 className="text-4xl font-bold text-[#64ffda] mb-4">
          Xavi Valverde | Make up Artist
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Un portfolio visual y elegante para Xavi Valverde, maquillador y estilista profesional.
          Este proyecto refleja su creatividad y habilidades en el mundo del maquillaje.
        </p>

        {/* Tecnologías utilizadas */}
        <div className="flex justify-center gap-4 mt-4 text-3xl text-white">
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
          <FaJs className="text-yellow-300" />
          <SiTailwindcss className="text-cyan-300" />
          <SiVite className="text-purple-400" />
        </div>

        {/* Información detallada */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mt-8">
          <h2 className="text-2xl font-semibold text-[#64ffda]">Descripción del Proyecto</h2>
          <p>
            Este proyecto es un portfolio visual y elegante para Xavi Valverde. Muestra su trabajo como maquillador
            y estilista, permitiendo a los clientes explorar su creatividad y contactarlo fácilmente.
          </p>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Objetivos del Proyecto</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mostrar las habilidades y trabajos de Xavi Valverde.</li>
            <li>Permitir a los clientes contactarlo fácilmente.</li>
            <li>Destacar su trabajo visual mediante imágenes y videos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Desafíos y Soluciones</h2>
          <p>
            El mayor desafío fue optimizar las imágenes y el video para que carguen rápidamente sin perder calidad.
            Se utilizaron técnicas de Lazy Loading y optimización de imágenes para mejorar la velocidad.
          </p>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Lecciones Aprendidas</h2>
          <p>
            Este proyecto me permitió mejorar mis habilidades en diseño visual, optimización de rendimiento,
            y diseño centrado en el usuario.
          </p>
        </div>
      </div>

      
      {/* Panel flotante en escritorio / barra inferior en móvil */}
      
      <div className="z-50 text-white text-sm md:text-base">
        {/* Escritorio: panel flotante vertical */}
        <div className="hidden sm:fixed sm:top-1/3 sm:right-5 sm:flex sm:flex-col sm:gap-5">
          {/* Volver */}
          <Link
            to="/"
            className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
          >
            <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
              Volver atrás
            </span>
            <FaArrowLeft className="text-[22px] md:text-[26px]" />
          </Link>

          {/* Ver proyecto */}
          <a
            href="https://xavi-valverde.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
          >
            <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
              Ver proyecto
            </span>
            <FaExternalLinkAlt className="text-[22px] md:text-[26px]" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Albertojs89/XaviValverde"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
          >
            <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
              GitHub
            </span>
            <FaGithub className="text-[22px] md:text-[26px]" />
          </a>
        </div>

        {/* Móvil: barra inferior fija con solo iconos */}
        <div className="fixed bottom-2 left-0 right-0 mx-auto flex justify-center gap-6 sm:hidden">
          <Link
            to="/"
            className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
          >
            <FaArrowLeft className="text-xl" />
          </Link>
          <a
            href="https://xavi-valverde.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
          >
            <FaExternalLinkAlt className="text-xl" />
          </a>
          <a
            href="https://github.com/Albertojs89/XaviValverde"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>

    </section>
  );
}

export default XaviDetalles;

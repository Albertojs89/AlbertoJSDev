// src/pages/CanDoDetalles.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase } from 'react-icons/si';
import '../assets/detalles.css';

function CanDoDetalles() {
  const [selectedImage, setSelectedImage] = useState(null);

  // [MANTENIDO] Forzamos scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // [TODO] Sustituye estos paths por capturas reales de CanDo cuando las tengas
  const images = [
    "/images/cando-dashboard.png",
    "/images/cando-crear-plan.png",
    "/images/cando-registrar-dia.png",
  ];

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <section className="min-h-screen py-16 px-4 text-center bg-[#131b24] text-[#ccd6f6] fondo-con-luz">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* [CAMBIO] Video/GIF de CanDo */}
        <div className="relative w-full max-w-[720px] mx-auto mb-8 rounded-xl overflow-hidden shadow-lg group">
          
          <video
            src="/videos/cando-demo.mp4" // <- TODO: reemplaza por el tuyo
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* [CAMBIO] Título y descripción breve para CanDo */}
        <h1 className="text-4xl font-bold text-[#64ffda] mb-4">
          CanDo — Planes y progreso para educar a tu perro
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          <strong>CanDo</strong> te acompaña en la educación de tu perro con consejos reales de educadores,
          planes personalizados, <em>registro diario</em> y un sistema de recompensas que motiva el avance.
          El objetivo: mejorar la conducta y reforzar el vínculo, día a día.
        </p>

        {/* [CAMBIO] Tecnologías reales del proyecto */}
        <div className="flex justify-center gap-4 mt-4 text-3xl text-white">
          <FaReact title="React" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiSupabase title="Supabase" />
        </div>

        {/* [MANTENIDO] Galería de imágenes (temporal con placeholders) */}
        <h2 className="text-2xl font-semibold text-[#64ffda] mt-8">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {images.map((src, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={src}
                alt={`Captura CanDo ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-110 shadow-lg"
                onClick={() => openImage(src)}
              />
            </div>
          ))}
        </div>

        {/* [MANTENIDO] Información detallada (de momento mínima; secciones reales en siguientes pasos) */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mt-8">
          <h2 className="text-2xl font-semibold text-[#64ffda]">Descripción del Proyecto</h2>
          <p>
            CanDo es una aplicación centrada en la mejora de conducta canina a través de planes guiados,
            evaluación diaria y refuerzos positivos. Está diseñada para ser clara, motivadora y accesible.
            En los siguientes bloques detallaré el problema que resuelve, el flujo MVP y las decisiones de diseño.
          </p>
        </div>

        {/* [MANTENIDO] Modal de imagen ampliada */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50">
            <div className="relative">
              <img src={selectedImage} alt="Ampliada" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl" />
              <button
                className="absolute top-4 right-4 text-white text-3xl bg-[#828383] p-2 rounded-full hover:bg-[#3e4140] transition"
                onClick={closeImage}
                aria-label="Cerrar"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* [MANTENIDO] Panel flotante / barra inferior, con enlaces actualizados */}
        <div className="z-50 text-white text-sm md:text-base">
          {/* Escritorio: panel lateral */}
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

            {/* Ver proyecto (DEMO en producción) */}
            <a
              href="https://cando.tu-dominio.com" // TODO: reemplaza por tu deploy real
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
            >
              <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                Ver demo
              </span>
              <FaExternalLinkAlt className="text-[22px] md:text-[26px]" />
            </a>

            {/* GitHub (privado o acceso por solicitud) */}
            <a
              href="https://github.com/Albertojs89/cando" // TODO: si es privado, puedes enlazar a un README público/landing del repo
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
              title="Código bajo solicitud"
            >
              <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                Código (bajo solicitud)
              </span>
              <FaGithub className="text-[22px] md:text-[26px]" />
            </a>
          </div>

          {/* Móvil: barra inferior */}
          <div className="fixed bottom-2 left-0 right-0 mx-auto flex justify-center gap-6 sm:hidden">
            <Link
              to="/"
              className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
            >
              <FaArrowLeft className="text-xl" />
            </Link>
            <a
              href="https://cando.tu-dominio.com" // TODO
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
            <a
              href="https://github.com/Albertojs89/cando" // TODO
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
              title="Código bajo solicitud"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CanDoDetalles;

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { SiBootstrap, SiMysql } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useState } from 'react';



function GamesDetalles() {
  const [selectedImage, setSelectedImage] = useState(null);
  // Forzar scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/images/bdBitepixe.jpg",
    "/images/admin.jpg",
    "/images/adminpanel.jpg",
    "/images/noticias.jpg",
  ];

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="min-h-screen py-16 px-4 text-center bg-[#131b24] text-[#ccd6f6]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Video del proyecto */}
        <div className="relative w-full max-w-[720px] mx-auto mb-8 rounded-xl overflow-hidden shadow-lg group">
          <video
            src="/videos/proyecto2.mp4"
            alt="Video del proyecto"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Título y descripción */}
        <h1 className="text-4xl font-bold text-[#64ffda] mb-4">BITEPIXE | PortalGames</h1>
        <p className="text-lg max-w-3xl mx-auto">
        BITEPIXE es una plataforma web de noticias de videojuegos, análisis y comunidad interactiva. Es una web diseñada para tener noticias en un formato atractivo y fácil de leer. Los usuarios pueden registrarse, 
        comentar y participar en la comunidad de Post-its. La web está optimizada para dispositivos móviles y tiene un diseño responsivo. El objetivo es proporcionar una experiencia de usuario fluida y atractiva y moderna.
        </p>

        {/* Tecnologías utilizadas */}
        <div className="flex justify-center gap-4 mt-4 text-3xl text-white">
          <FaHtml5 className="text-orange-500" />
          <SiBootstrap className="text-purple-600" />
          <FaPhp className="text-indigo-300" />
          <FaCss3Alt className="text-blue-500" />
          <SiMysql className="text-yellow-300" />
        </div>

         {/* Galería de Imágenes */}
         <h2 className="text-2xl font-semibold text-[#64ffda] mt-8">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {images.map((src, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img 
                src={src} 
                alt={`Imagen ${index + 1}`} 
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-110 shadow-lg"
                onClick={() => openImage(src)}
              />
            </div>
          ))}
        </div>

        {/* Información detallada */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mt-8">
          <h2 className="text-2xl font-semibold text-[#64ffda]">Descripción del Proyecto</h2>
          <p>
            Este proyecto nace de uno de mis hobbies y pasiones, los videojuegos. Algo que siempre he hecho es visitar páginas web de videojuegos para estar al tanto de las últimas noticias y lanzamientos.
            Y este proyecto es una idea de lo que me gustaría poder encontrar en una web de videojuegos. Accesibilidad rápdida, en unas generaciones de click y vistazo rápido, bien separado de analisis detallados.
            Opiniones subjetivas del redactor, que a la vez divierte la lectura, y como gusto personal, unas secciones simulando las revistas clásicas de videojuegos, donde se pueden
            visualizar rankings, y una sección que los usuarios dejan comentarios y los redactores pueden responder.
            Además en es un proyecto que aplicamos Base de datos MySQL, y un panel de administración para gestionar los usuarios y los comentarios.
            Una experiencia muy completa y productiva con PHP.
          </p>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Objetivos del Proyecto</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Visual moderna y navegación atractiva en su target.</li>
            <li>Funciones a nivel usuario-administrador CRUD mediante un panel.</li>
            <li>Hacerla muy asequible para uso en pantallas móvil.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Desafíos y Soluciones</h2>
          <p>
            Los mayores problemas surgieron en el flujo de trabajo y la gestión de datos. La integración de PHP con MySQL fue un reto, pero aprendí a manejar consultas SQL complejas y optimizar el rendimiento de la base de datos.
            La gestión de sesiones y la autenticación de usuarios también presentaron desafíos, pero implementé un sistema de inicio de sesión seguro y eficiente.

          </p>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Lecciones Aprendidas</h2>
          <p>
            Aprendí a trabajar con bases de datos y a gestionar la seguridad de los datos de los usuarios. También mejoré mis habilidades en PHP y en el diseño de interfaces de usuario.
            La experiencia me enseñó la importancia de la planificación y la organización en el desarrollo de proyectos web. Además, aprendí a trabajar con herramientas de control de versiones como Git para gestionar el código y colaborar con otros desarrolladores.
          </p>
        </div>
         {/* Modal de Imagen Ampliada */}
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
            href="https://albertojs89.alwaysdata.net/BITEPIXE/index.php"
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
            href="#"
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
      </div>
    </section>
  );
}

export default GamesDetalles;

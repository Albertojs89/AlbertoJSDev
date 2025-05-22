import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

function MySelfDetalles() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Forzar scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/images/fondo.png",
    "/images/fondo2.jpeg",
    "/images/fondo3.jpeg",
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
            src="/videos/proyecto3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Título y descripción */}
        <h1 className="text-4xl font-bold text-[#64ffda] mb-4">MySelf | Portfolio interactivo (en desarrollo)</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Este portfolio es una experiencia interactiva y visual que combina creatividad y desarrollo. 
          A través de un escenario ilustrado y sprites animados creados por mí, puedes explorar mis habilidades, 
          proyectos y conocimientos mientras te desplazas por la pantalla.
        </p>

	 {/* Tecnologías utilizadas */}
        <div className="flex justify-center gap-4 mt-4 text-3xl text-white">
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
          <FaJs className="text-yellow-300" />
          <FaReact className="text-cyan-400" />
          <SiTailwindcss className="text-cyan-300" />
          <SiVite className="text-purple-400" />
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

        {/* Sprites con fondo gris */}
        <div className="flex justify-center items-center gap-8 bg-gray-300 rounded-xl py-8 mt-6">
          <img
            src="/images/sprite-quieto.gif"
            alt="Sprite 1"
            className="h-40 object-contain"
            draggable={false}
          />
          <img
            src="/images/sprite-corre-derecha.gif"
            alt="Sprite 2"
            className="h-40 object-contain"
            draggable={false}
          />
        </div>
        {/* Fin Sprites */}

        {/* Información detallada */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mt-8">
          <h2 className="text-2xl font-semibold text-[#64ffda]">Descripción del Proyecto</h2>
          <p>
          Este proyecto surge del deseo de fusionar dos de mis mayores pasiones: la ilustración y el desarrollo web. Más que un simple portfolio profesional, 
          es una carta de presentación que revela mi lado más auténtico y creativo. Inspirado en estilos artísticos de videojuegos como Limbo y Hollow Knight,
          este espacio invita al usuario a sumergirse en un mundo visualmente evocador.
          La idea es que quien lo explore no solo descubra mis habilidades, sino que disfrute del recorrido y sienta el deseo de quedarse, 
          explorando cada rincón de este pequeño universo interactivo.
          </p>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Objetivos del Proyecto</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mostrar las habilidades tanto de Frontend como de diseño creativo e ilustración.</li>
            <li>Permitir a los clientes conectar y recordar una experiencia visual.</li>
            <li>Destacar su trabajo visual mediante imágenes, animaciones y efectos.</li>
          </ul>

          <div className="space-y-4 text-left text-[15px] leading-relaxed">
            <h3 className="text-xl font-bold text-[#64ffda]">🗓 Fecha prevista de finalización:</h3>
            <p>20 de julio de 2025</p>

            <h3 className="text-xl font-bold text-[#64ffda]">🚀 Últimos avances:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Aplicado movimiento del escenario con la <strong>rueda del ratón</strong> para conseguir una navegación más fluida y natural. Se abandona el uso de flechas por su desplazamiento demasiado brusco.
              </li>
              <li>
                Iniciadas <strong>mejoras visuales en formato móvil</strong> para permitir una visualización correcta, aunque el proyecto sigue enfocado a escritorio.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#64ffda]">🔜 Próximos pasos:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solucionar eventos según coordenadas exactas.</li>
              <li>Corregir aparición del sprite (popping visual).</li>
              <li>Aplicar nuevos eventos e interacciones dentro del escenario.</li>
            </ul>
          </div>


          <h2 className="text-2xl font-semibold text-[#64ffda]">Lecciones Aprendidas</h2>
          <p>
            Este proyecto me permitió mejorar mis habilidades en diseño visual, afrontar problemas de visualización y resolverlos con alternativas creativas.
            Conceptos de efectos CSS.
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

        {/* Enlaces visuales */}
        <div className="flex justify-center gap-6 mt-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white text-xl hover:text-[#64ffda] transition-colors"
          >
            <FaArrowLeft className="text-2xl" /> Volver al Portfolio
          </Link>

          <a 
            href="https://myself.albertojs.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-white text-xl hover:text-[#64ffda] transition-colors"
          >
            <FaExternalLinkAlt className="text-2xl" /> Ver Proyecto en Vivo
          </a>

          <a 
            href="https://github.com/Albertojs89/PortfolioBite/tree/main" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-white text-xl hover:text-[#64ffda] transition-colors"
          >
            <FaGithub className="text-2xl" /> Código en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default MySelfDetalles;

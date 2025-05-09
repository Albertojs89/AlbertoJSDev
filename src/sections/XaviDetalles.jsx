// XaviDetalles.jsx
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

function XaviDetalles() {
  return (
    <section className="min-h-screen py-16 px-4 text-center bg-[#131b24] text-[#ccd6f6]">
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
        <h1 className="text-4xl font-bold text-[#64ffda] mb-4">Xavi Valverde | Make up Artist</h1>
        <p className="text-lg max-w-3xl mx-auto">
          El portfolio de Xavi Valverde es una plataforma visual diseñada para mostrar su trabajo en maquillaje y 
          estilismo de manera elegante y minimalista. El diseño está enfocado en destacar su creatividad, 
          permitiendo a los usuarios navegar fácilmente por sus proyectos.


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

        {/* Información detallada */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mt-8">
          <h2 className="text-2xl font-semibold text-[#64ffda]">Descripción del Proyecto</h2>
          <p>
            El objetivo de este proyecto fue crear un espacio visual donde Xavi pudiera mostrar su trabajo
            como maquillador y estilista. El diseño está enfocado en una experiencia visual clara, que permita
            a los usuarios explorar su trabajo de manera fluida.
          </p>

          <h2 className="text-2xl font-semibold text-[#64ffda]">Objetivos del Proyecto</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mostrar las habilidades y trabajos de Xavi Valverde.</li>
            <li>Permitir a los clientes contactarlo fácilmente.</li>
            <li>Destacar su trabajo visual mediante imágenes y videos.</li>
            <li>Crear una experiencia visual fluida y clara.</li>
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

        {/* Enlaces */}
        <div className="flex justify-center gap-6 mt-8">
          <Link to="/" className="text-[#64ffda] underline hover:text-white transition-colors">
            Volver a Portfolio
          </Link>

          <a
            href="https://xavi-valverde.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] underline hover:text-white transition-colors"
          >
            Ver Proyecto en Vivo
          </a>
          <a
            href="https://github.com/Albertojs89/XaviValverde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] underline hover:text-white transition-colors"
          >
            Ver Código en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default XaviDetalles;

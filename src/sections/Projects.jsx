import {
  FaReact,
  FaPhp,
  FaGithub,
  FaCss3Alt,
  FaJs,
  FaHtml5,
} from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiMysql, SiBootstrap } from 'react-icons/si';

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-[9rem] pb-32 px-4 text-center"
      data-aos="fade-up"
    >

      {/* Ancla de detección para móviles */}
      <div id="projects" className="sr-only" aria-hidden="true"></div>

      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center w-full">
        {/* Proyecto 1 */}
        <div className="flex flex-col items-center group w-full max-w-4xl">
          <div className="relative w-full max-w-[720px] overflow-visible cursor-pointer transition-all duration-500 group">
            <div className="absolute inset-0 -z-10 scale-105 rounded-2xl bg-[#64ffda] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />
            <a
              href="https://xavi-valverde.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block z-10 relative rounded-xl overflow-hidden"
            >
              <video
                src="/videos/proyecto1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
            </a>
          </div>

          <h3 className="mt-6 text-2xl lg:text-3xl font-semibold text-[#64ffda]">
            Xavi Valverde | Make up Artist
          </h3>

          <div className="flex gap-4 mt-2 text-3xl text-white">
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaJs className="text-yellow-300" />
            <SiTailwindcss className="text-cyan-300" />
            <SiVite className="text-purple-400" />
          </div>

          <p className="mt-4 text-[#ccd6f6] text-base px-4">
            Portfolio profesional de Xavi Valverde, maquillador y estilista profesional.
          </p>

          <a
            href="https://github.com/tuusuario/gestion-incidencias"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-white text-2xl hover:text-[#64ffda] transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        {/* Proyecto 2 */}
        <div className="flex flex-col items-center group w-full max-w-4xl">
          <div className="relative w-full max-w-[720px] overflow-visible cursor-pointer transition-all duration-500 group">
            <div className="absolute inset-0 -z-10 scale-105 rounded-2xl bg-[#64ffda] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block z-10 relative rounded-xl overflow-hidden"
            >
              <video
                src="/videos/proyecto3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
            </a>
          </div>

          <h3 className="mt-6 text-2xl lg:text-3xl font-semibold text-[#64ffda]">
            My Self | Portfolio interactivo (en desarrollo)
          </h3>

          <div className="flex gap-4 mt-2 text-3xl text-white">
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaReact className="text-cyan-400" />
            <FaJs className="text-yellow-300" />
            <SiTailwindcss className="text-cyan-300" />
            <SiVite className="text-purple-400" />
          </div>

          <p className="mt-4 text-[#ccd6f6] text-base px-4">
            Portal de noticias de videojuegos.
          </p>

          <a
            href="https://github.com/tuusuario/gestor-incidencias"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-white text-2xl hover:text-[#64ffda] transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        {/* Proyecto 3 */}
        <div className="flex flex-col items-center group w-full max-w-4xl">
          <div className="relative w-full max-w-[720px] overflow-visible cursor-pointer transition-all duration-500 group">
            <div className="absolute inset-0 -z-10 scale-105 rounded-2xl bg-[#64ffda] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block z-10 relative rounded-xl overflow-hidden"
            >
              <video
                src="/videos/proyecto2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
            </a>
          </div>

          <h3 className="mt-6 text-2xl lg:text-3xl font-semibold text-[#64ffda]">
            Bitepixe PortalGames
          </h3>

          <div className="flex gap-4 mt-2 text-3xl text-white">
            <FaHtml5 className="text-orange-500" />
            <SiBootstrap className="text-purple-600" />
            <FaPhp className="text-indigo-300" />
            <FaCss3Alt className="text-blue-500" />
            <SiMysql className="text-yellow-300" />
          </div>

          <p className="mt-4 text-[#ccd6f6] text-base px-4">
            Portal de noticias de videojuegos.
          </p>

          <a
            href="https://github.com/tuusuario/gestor-incidencias"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-white text-2xl hover:text-[#64ffda] transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent my-16" />

    </section>
  );
}

export default Projects;

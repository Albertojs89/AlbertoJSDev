import { useState } from 'react';

function About() {
  const [hovered, setHovered] = useState(null); // 'frontend' o 'creative'

  return (
    <section
      id="about"
      className="min-h-screen py-32 px-4 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-[Poppins] mb-12 text-[#ccd6f6]">About Me</h2>

      {/* Ilustraciones lado a lado más grandes y más juntas */}
      <div className="flex flex-wrap gap-3 justify-center mb-10 mt-4">
        {/* Imagen Frontend */}
        <div
          onMouseEnter={() => setHovered('frontend')}
          onMouseLeave={() => setHovered(null)}
          className="relative w-[300px] h-auto cursor-pointer transition-all duration-500"
        >
          <img
            src="/sonriendo.png"
            alt="Frontend"
            className={`w-full h-full object-contain transition-all duration-500 ${
              hovered === 'creative' ? 'blur-sm grayscale' : 'blur-0'
            }`}
          />
        </div>

        {/* Imagen Creativa */}
        <div
          onMouseEnter={() => setHovered('creative')}
          onMouseLeave={() => setHovered(null)}
          className="relative w-[300px] h-auto cursor-pointer transition-all duration-500"
        >
          <img
            src="/pensando.png"
            alt="Creative"
            className={`w-full h-full object-contain transition-all duration-500 ${
              hovered === 'frontend' ? 'blur-sm grayscale' : 'blur-0'
            }`}
          />
        </div>
      </div>

      {/* Título dual con efecto dinámico */}
      <div className="mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#ccd6f6] transition-all duration-500">
          <span
            className={`transition-opacity duration-500 ${
              hovered === 'creative' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Frontend Developer
          </span>
          <span className="mx-2 text-[#64ffda]">/</span>
          <span
            className={`transition-opacity duration-500 ${
              hovered === 'frontend' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Creative Design
          </span>
        </h3>
      </div>


      {/* Texto descriptivo */}
      <div className="max-w-2xl px-4">
        <p className="text-lg mb-4 text-[#ccd6f6]">
          Soy Alberto Jiménez, un desarrollador frontend con formación en UI/UX y diseño, y también me apasiona la ilustración como forma de comunicar ideas y conceptos visuales.
        </p>
        <p className="text-lg text-[#ccd6f6]">
          Me gusta construir experiencias con alma, combinando código, diseño y creatividad.
        </p>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent my-16" />
      </div>
    </section>
  );
}

export default About;

import { useState } from 'react';

function About() {
  const [selected, setSelected] = useState('frontend'); // 'frontend' o 'creative'

  return (
    <section
      id="about"
      className="min-h-screen py-32 px-4 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-12">About Me</h2>

      {/* Ilustraciones lado a lado más grandes y más juntas */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {/* Imagen Frontend */}
        <div
          onClick={() => setSelected('frontend')}
          className="relative w-[300px] h-auto cursor-pointer transition-all duration-500"
        >
          <img
            src="/sonriendo.png"
            alt="Frontend"
            className={`w-full h-full object-contain transition-all duration-500 ${
              selected === 'creative' ? 'blur-sm grayscale' : 'blur-0'
            }`}
          />
        </div>

        {/* Imagen Creativa */}
        <div
          onClick={() => setSelected('creative')}
          className="relative w-[300px] h-auto cursor-pointer transition-all duration-500"
        >
          <img
            src="/pensando.png"
            alt="Creative"
            className={`w-full h-full object-contain transition-all duration-500 ${
              selected === 'frontend' ? 'blur-sm grayscale' : 'blur-0'
            }`}
          />
        </div>
      </div>

      {/* Títulos animados con estilos distintos */}
      <div className="h-12 mb-10 relative">
        <h3
          className={`absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-[#64ffda] transition-all duration-500 ease-in-out ${
            selected === 'frontend'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          Frontend Developer
        </h3>
        <h3
          className={`absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-[#64ffda] transition-all duration-500 ease-in-out ${
            selected === 'creative'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          Creative Design
        </h3>

      </div>

      {/* Texto descriptivo */}
      <div className="max-w-2xl px-4">
        <p className="text-lg mb-4 text-[#ccd6f6]">
          Soy un desarrollador frontend con formación en UI/UX, y también me apasiona la ilustración como forma de comunicar ideas y conceptos visuales.
        </p>
        <p className="text-lg text-[#ccd6f6]">
          Me gusta construir experiencias con alma, combinando código, diseño y creatividad.
        </p>
      </div>
    </section>
  );
}

export default About;

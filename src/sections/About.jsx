import { useState } from 'react';
import { BsCursor } from 'react-icons/bs';

function About() {
  const [selected, setSelected] = useState('frontend');

  return (
    <section
      id="about"
      className="min-h-screen py-32 px-4 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      {/* Ilustraciones lado a lado más grandes y más juntas */}
      <div className="flex flex-wrap gap-6 justify-center mb-15 ">
        {/* Imagen Frontend */}
        <div
          onClick={() => setSelected('frontend')}
          className="relative w-[300px] flex flex-col items-center cursor-pointer transition-all duration-500 group"
        >
          <div className="absolute inset-0 rounded-lg bg-[#64ffda] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-10 z-0" />
          <img
            src="/sonriendo.png"
            alt="Frontend"
            className={`relative z-10 w-full h-full object-contain transition-all duration-500 ${
              selected === 'creative' ? 'blur-sm grayscale' : 'blur-0'
            }`}
          />
          <div className="mt-2 text-[#ccd6f6]/40 text-lg opacity-0 group-hover:opacity-100 transition duration-500 animate-[pulse_1.8s_ease-in-out_infinite]">
            <BsCursor />
          </div>
        </div>

        {/* Imagen Creativa */}
        <div
          onClick={() => setSelected('creative')}
          className="relative w-[300px] flex flex-col items-center cursor-pointer transition-all duration-500 group"
        >
          <div className="absolute inset-0 rounded-lg bg-[#64ffda] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-10 z-0" />
          <img
            src="/pensando.png"
            alt="Creative"
            className={`relative z-10 w-full h-full object-contain transition-all duration-500 ${
              selected === 'frontend' ? 'blur-sm grayscale' : 'blur-0'
            }`}
          />
          <div className="mt-2 text-[#ccd6f6]/40 text-lg opacity-0 group-hover:opacity-100 transition duration-500 animate-[pulse_1.8s_ease-in-out_infinite]">
            <BsCursor />
          </div>
        </div>
      </div>

      {/* Títulos animados */}
      <div className="h-14 mb-10 relative">
        <h3
          className={`absolute left-1/2 -translate-x-1/2 text-3xl font-semibold text-[#64ffda] transition-all duration-500 ease-in-out ${
            selected === 'frontend'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          Frontend Developer
        </h3>

        <h3
          className={`absolute left-1/2 -translate-x-1/2 text-3xl font-semibold text-[#64ffda] transition-all duration-500 ease-in-out ${
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

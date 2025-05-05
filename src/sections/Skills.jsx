import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaPhp,
  FaFigma,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiVite,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, label: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS3' },
    { icon: <FaJs className="text-yellow-400" />, label: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400" />, label: 'React' },
    { icon: <FaBootstrap className="text-purple-600" />, label: 'Bootstrap' },
    { icon: <SiTailwindcss className="text-cyan-300" />, label: 'Tailwind' },
    { icon: <SiVite className="text-purple-400" />, label: 'Vite' },
    { icon: <SiAdobephotoshop className="text-blue-400" />, label: 'Photoshop' },
    { icon: <SiAdobeillustrator className="text-yellow-500" />, label: 'Illustrator' },
    { icon: <FaFigma className="text-pink-500" />, label: 'Figma' },
    { icon: <FaGithub className="text-white" />, label: 'GitHub' },
    { icon: <FaPhp className="text-indigo-300" />, label: 'PHP' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-32 px-4 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-12">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">

        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="relative flex flex-col items-center group"
          >
            {/* Halo luminoso */}
            <div className="absolute w-24 h-24 rounded-full bg-[#64ffda] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20" />

            {/* Icono */}
            <div className="relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
              <div className="text-6xl">{skill.icon}</div>
            </div>

            <p className="text-sm mt-3 text-[#ccd6f6] z-10">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

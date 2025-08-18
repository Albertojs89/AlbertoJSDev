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
  SiNextdotjs,
  SiOpenai,
  SiSupabase,
  SiGithubcopilot,
} from 'react-icons/si';

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 className="text-orange-600" />,
      label: 'HTML5',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      icon: <FaCss3Alt className="text-blue-500" />,
      label: 'CSS3',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      icon: <FaJs className="text-yellow-400" />,
      label: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      icon: <FaReact className="text-cyan-400" />,
      label: 'React',
      url: 'https://reactjs.org/',
    },
    {
      icon: <FaBootstrap className="text-purple-600" />,
      label: 'Bootstrap',
      url: 'https://getbootstrap.com/',
    },
    {
      icon: <SiTailwindcss className="text-cyan-300" />,
      label: 'Tailwind',
      url: 'https://tailwindcss.com/',
    },
    {
      icon: <SiVite className="text-purple-400" />,
      label: 'Vite',
      url: 'https://vitejs.dev/',
    },
    {
      icon: <SiAdobephotoshop className="text-blue-400" />,
      label: 'Photoshop',
      url: 'https://www.adobe.com/products/photoshop.html',
    },
    {
      icon: <SiAdobeillustrator className="text-yellow-500" />,
      label: 'Illustrator',
      url: 'https://www.adobe.com/products/illustrator.html',
    },
    {
      icon: <FaFigma className="text-pink-500" />,
      label: 'Figma',
      url: 'https://www.figma.com/',
    },
    {
      icon: <FaGithub className="text-white" />,
      label: 'GitHub',
      url: 'https://github.com/',
    },
    {
      icon: <FaPhp className="text-indigo-300" />,
      label: 'PHP',
      url: 'https://www.php.net/',
    },
    {
      icon: <SiSupabase className="text-green-500" />,
      label: 'Supabase',
      url: 'https://supabase.com/',
    },
    {
      icon: <SiNextdotjs className="text-black" />,
      label: 'Next.js',
      url: 'https://nextjs.org/',
    },
    {
      icon: <SiOpenai className="text-green-500" />,
      label: 'ChatGPT',
      url: 'https://openai.com/chatgpt',
    },
    {
      icon: <SiGithubcopilot className="text-[#64ffda]" />,
      label: 'Copilot',
      url: 'https://github.com/features/copilot',
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-32 px-4 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold mb-12 font-[Poppins]">Skills</h2>

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

            {/* Icono con enlace */}
            <div className="relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl"
              >
                {skill.icon}
              </a>
            </div>

            <p className="text-sm mt-3 text-[#ccd6f6] z-10">{skill.label}</p>
          </div>
        ))}
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent my-16" />
    </section>
  );
}

export default Skills;

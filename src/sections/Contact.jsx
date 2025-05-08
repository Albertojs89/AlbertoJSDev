import { FaLinkedin, FaGithub, FaInstagram, FaFileAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-4 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-12">Contact</h2>

      <p className="text-lg text-[#ccd6f6] max-w-xl mb-8">
        "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en contactarme. ¡Hablemos y creemos algo increíble juntos!"
      </p>

      {/* Redes sociales */}
      <div className="flex gap-8 text-3xl text-[#64ffda]">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alberto-jim%C3%A9nez-s%C3%A1nchez-5ab368211/?originalSubdomain=es"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-[#a0ffe6] transition-all duration-300"
          alt='LinkedIn'
        >
          <FaLinkedin />
          <span className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="shine-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Albertojs89"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-[#a0ffe6] transition-all duration-300"
          alt='GitHub'
        >
          <FaGithub />
          <span className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="shine-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/bitepixe/?igsh=MTVwdWNlbXVtc3I2MA%3D%3D&utm_source=qr#"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-[#a0ffe6] transition-all duration-300"
          alt='Instagram'
        >
          <FaInstagram />
          <span className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="shine-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>

        {/* CV */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-[#a0ffe6] transition-all duration-300"
          alt='Curriculum Vitae'
        download
        >
          <FaFileAlt />
          <span className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="shine-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;

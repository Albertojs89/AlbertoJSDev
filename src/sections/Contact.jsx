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
        ¿Te interesa colaborar o tienes alguna pregunta? ¡No dudes en contactarme!
      </p>

      {/* Redes sociales */}
      <div className="flex gap-8 text-3xl text-[#64ffda]">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-[#a0ffe6] transition-all duration-300"
        >
          <FaLinkedin />
          <span className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="shine-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-[#a0ffe6] transition-all duration-300"
        >
          <FaGithub />
          <span className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="shine-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-[#a0ffe6] transition-all duration-300"
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

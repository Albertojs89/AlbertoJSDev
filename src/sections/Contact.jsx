import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-4 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-12">Contact</h2>

      <p className="text-lg max-w-xl mx-auto mb-10 text-[#ccd6f6]">
        ¿Te ha gustado lo que has visto? Estoy abierto a nuevas oportunidades, colaboraciones creativas o simplemente una charla.
      </p>

      <div className="flex justify-center gap-8 text-3xl text-[#64ffda]">
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a0ffe6] transition-all"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a0ffe6] transition-all"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a0ffe6] transition-all"
        >
          <FaInstagram />
        </a>
        <a
          href="/CV-Alberto.pdf"
          download
          className="hover:text-[#a0ffe6] transition-all"
          title="Descargar CV"
        >
          <FaFileAlt />
        </a>
      </div>

      <p className="mt-8 text-sm text-[#8892b0]">
        Diseñado y desarrollado por mí © {new Date().getFullYear()}
      </p>
    </section>
  );
}

export default Contact;

import { FaLinkedin, FaGithub, FaInstagram, FaFileAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-4 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold mb-12">Contact</h2>

      <p className="text-lg text-[#ccd6f6] max-w-xl mb-8">
        "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en contactarme. ¡Hablemos y creemos algo increíble juntos!"
      </p>

      {/* Redes sociales */}
      
      <div className="flex gap-8 text-3xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alberto-jim%C3%A9nez-s%C3%A1nchez-5ab368211/?originalSubdomain=es"
          target="_blank"
          rel="noopener noreferrer"
          alt="LinkedIn"
        >
          <FaLinkedin className="social-icon text-[#64ffda]" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Albertojs89"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub"
        >
          <FaGithub className="social-icon text-[#64ffda]" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/bitepixe/?igsh=MTVwdWNlbXVtc3I2MA%3D%3D&utm_source=qr#"
          target="_blank"
          rel="noopener noreferrer"
          alt="Instagram"
        >
          <FaInstagram className="social-icon text-[#64ffda]" />
        </a>

        {/* CV */}
        <div className="flex flex-col items-center">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            alt="Curriculum Vitae"
            download
          >
            <FaFileAlt className="social-icon text-[#64ffda]" />
          </a>
          <p className="text-base text-[#a0ffe6] mt-1">CV</p>
        </div>
      </div>

    </section>
  );
}

export default Contact;

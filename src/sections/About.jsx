function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-32 px-4 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      {/* Imagen PNG sin fondo con animación */}
      <div data-aos="fade-up" data-aos-delay="200">
        <img
          src="public\pngtree-tree-logo-png-image_16527502.png"
          alt="Alberto"
          className="w-40 h-auto mb-8"
        />
      </div>

      {/* Texto descriptivo */}
      <div data-aos="fade-up" data-aos-delay="400" className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg mb-4">
          Soy un desarrollador frontend con formación en UI/UX, apasionado por unir código y diseño en experiencias únicas.
        </p>
        <p className="text-lg">
          Me gusta crear interfaces visuales limpias, funcionales y con alma. Este portfolio refleja esa intención.
        </p>
      </div>
    </section>
  );
}

export default About;

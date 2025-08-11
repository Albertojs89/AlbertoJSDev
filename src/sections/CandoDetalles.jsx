// src/pages/CanDoDetalles.jsx
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaGithub, FaArrowLeft, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase, SiFigma, SiAdobeillustrator } from 'react-icons/si';
import '../assets/detalles.css';

function CanDoDetalles() {
  const [selectedImage, setSelectedImage] = useState(null);
  // Estados para zoom y pan solo para la imagen de BD
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imgStart, setImgStart] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  // [MANTENIDO] Forzamos scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // [TODO] Sustituye estos paths por capturas reales de CanDo cuando las tengas
  const images = [
    "/images/candoimg1.jpg",
    "/images/candoimg2.jpg",
    "/images/candoimg3.jpg",
    "/images/candoimg4.jpg",
    "/images/candoimg5.jpg"
  ];

  const openImage = (src) => {
    setSelectedImage(src);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };
  const closeImage = () => {
    setSelectedImage(null);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  // Permitir zoom y pan en la imagen de BD y en la de diseño
  const isZoomable = selectedImage === '/images/bd.png' || selectedImage === '/images/design.jpg';

  // Zoom con rueda del ratón
  const handleWheel = (e) => {
    if (!isZoomable) return;
    e.preventDefault();
    let newZoom = zoom + (e.deltaY < 0 ? 0.15 : -0.15);
    newZoom = Math.max(1, Math.min(newZoom, 4));
    setZoom(newZoom);
  };

  // Pan con arrastre
  const handleMouseDown = (e) => {
    if (!isZoomable || zoom === 1) return;
    setDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setImgStart({ ...offset });
  };
  const handleMouseMove = (e) => {
    if (!isZoomable || !dragging) return;
    setOffset({
      x: imgStart.x + (e.clientX - dragStart.x),
      y: imgStart.y + (e.clientY - dragStart.y),
    });
  };
  const handleMouseUp = () => {
    if (!isZoomable) return;
    setDragging(false);
  };

  return (
    <section className="min-h-screen py-16 px-4 text-center bg-[#131b24] text-[#ccd6f6] fondo-con-luz">
      <div className="max-w-4xl mx-auto space-y-12">

        {/*  Video/GIF de CanDo */}
        <div className="relative w-full max-w-[720px] mx-auto mb-8 rounded-xl overflow-hidden shadow-lg group">
          
          <video
            src="/videos/candovideo.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/*  Título y descripción breve para CanDo */}
        <h1 className="text-4xl font-bold text-[#64ffda] mb-4">
          CanDo — Planes y progreso para educar a tu perro
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          <strong>CanDo</strong> te acompaña en la educación de tu perro con consejos reales de educadores,
          planes personalizados, <em>registro diario</em> y un sistema de recompensas que motiva el avance.
          El objetivo: mejorar la conducta y reforzar el vínculo, día a día.
        </p>

        {/*  Tecnologías reales del proyecto */}
        <div className="flex justify-center gap-4 mt-4 text-3xl text-white">
          <FaHtml5 title="HTML5" className="text-orange-500" />
          <FaCss3Alt title="CSS3" className="text-blue-500" />
          <FaJs title="JavaScript" className="text-yellow-300" />
          <FaReact title="React" className="text-cyan-400" />
          <SiSupabase title="Supabase" className="text-green-500" />
          <SiTailwindcss title="Tailwind CSS" className="text-cyan-300" />
          <SiFigma title="Figma" className="text-pink-500" />
        </div>

        {/*  Galería de imágenes (temporal con placeholders) */}
        <h2 className="text-2xl font-semibold text-[#64ffda] mt-8">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {images.map((src, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={src}
                alt={`Captura CanDo ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-110 shadow-lg"
                onClick={() => openImage(src)}
              />
            </div>
          ))}
        </div>

        {/* [MANTENIDO] Información detallada (de momento mínima; secciones reales en siguientes pasos) */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mt-8">
          <h2 className="text-2xl font-semibold text-[#64ffda]">Descripción del Proyecto</h2>
          <p>
            CanDo es una aplicación centrada en la mejora de conducta canina a través de planes guiados,
            evaluación diaria y refuerzos positivos. Está diseñada para ser clara, motivadora y accesible.
            En los siguientes bloques detallaré el problema que resuelve, el flujo MVP y las decisiones de diseño.
          </p>
        </div>

        {/* ====================== [PASO 2] BLOQUES NUEVOS ====================== */}
{/* 
    [OBJETIVO] Añadir Problema/Solución, Flujo MVP y Diseño/Accesibilidad
*/}

{/* [SECCIÓN] Qué problema resuelve / Para quién */}
<div className="text-left max-w-3xl mx-auto space-y-4 mt-10">
  <h2 className="text-2xl font-semibold text-[#64ffda]">Qué problema resuelve / Para quién</h2>
  <p>
    CanDo nace para dueños de perro que buscan <strong>mejorar conductas concretas</strong> 
    (tirones, reactividad, ansiedad) con un método claro y motivador. 
    El problema típico: <em>“sé que debo trabajar X, pero no sé cómo estructurarlo, me desanimo y no veo progreso”</em>.
  </p>
  <ul className="list-disc pl-6 space-y-2">
    <li><strong>Dueños principiantes</strong>: guía paso a paso con lenguaje claro.</li>
    <li><strong>Usuarios ocupados</strong>: registro diario rápido (1–2 minutos) y seguimiento visual.</li>
    <li><strong>Personas orientadas a objetivos</strong>: metas automáticas por problema y medallas de refuerzo.</li>
  </ul>
</div>

{/* [SECCIÓN] Solución (en 30 segundos) */}
<div className="text-left max-w-3xl mx-auto space-y-4 mt-8">
  <h2 className="text-2xl font-semibold text-[#64ffda]">Solución (en 30 segundos)</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li><strong>Planes personalizados</strong> a partir de problemas seleccionados.</li>
    <li><strong>Evaluación diaria</strong> con huellas (1–5) y comentario opcional.</li>
    <li><strong>Progreso visible</strong> por objetivo y <strong>medallas</strong> inmediatas/acumulativas.</li>
    <li><strong>Consejos reales</strong> de educadores vinculados a cada problema.</li>
  </ul>
</div>

{/* [SECCIÓN] Flujo MVP (resumen funcional) */}
<div className="text-left max-w-3xl mx-auto space-y-4 mt-8">
  <h2 className="text-2xl font-semibold text-[#64ffda]">Flujo MVP</h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li><strong>Registro</strong> del líder y alta del perro (nombre, edad, raza, avatar opcional).</li>
    <li><strong>Crear plan</strong>: eliges problemas (tirones, reactividad, ansiedad…).</li>
    <li><strong>Objetivos automáticos</strong> según los problemas marcados.</li>
    <li><strong>Dashboard</strong>: objetivos en curso, barras de progreso y botón “Registrar día”.</li>
    <li><strong>Registrar día</strong>: 1–5 huellas por pregunta + comentario opcional.</li>
    <li><strong>Recompensas</strong>: medallas inmediatas y acumulativas; resumen semanal y mensual (roadmap).</li>
  </ol>
  {/* TIP: aquí podrás añadir más adelante una mini‑infografía o un GIF del flujo. */}
</div>

{/* [SECCIÓN] Diseño, Usabilidad y Accesibilidad  -----------------------------------*/}

 {/* Línea divisoria decorativa */}
      <div className="w-full flex justify-center my-12">
        <div className="h-[1px] w-2/3 bg-gradient-to-r from-[#64ffda] via-[#233554] to-[#64ffda] rounded-full opacity-70 shadow-md"></div>
      </div>
<div className="text-left max-w-3xl mx-auto space-y-5 mt-8">
  <h2 className="text-4xl font-semibold text-[#64ffda]">Diseño, Usabilidad y Accesibilidad</h2>

  {/* Diseño: tus decisiones visuales y porqués */}
  <div className="space-y-2">
    <h3 className="text-xl font-bold flex items-center gap-2 text-[#e6f7ff]">
      Diseño (mi adaptación)
      <SiFigma title="Figma" className="text-pink-500 text-2xl" />
      <SiAdobeillustrator title="Illustrator" className="text-orange-600 text-2xl" />
    </h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Coherencia cromática 3–4 colores</strong> para un look limpio y calmado (evitar sobrecarga visual).</li>
      <li><strong>Jerarquía clara</strong>: títulos grandes, descripciones legibles, CTAs muy visibles.</li>
      <li><strong>Gamificación sutil</strong>: medallas y barras de progreso como refuerzo positivo, sin “ruido”.</li>
      <li><strong>Ilustraciones y micro‑interacciones</strong> suaves para transmitir cercanía y motivación.</li>
    </ul>
  </div>

  {/* Usabilidad: cómo simplificas decisiones y fricción */}
  <div className="space-y-2">
  <h3 className="text-xl font-bold text-[#e6f7ff]">Usabilidad</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Registro en 2 pasos</strong> (líder → perro) para reducir abandono.</li>
      <li><strong>Registro diario en 1–2 min</strong>, con navegación tipo carrusel y huellas táctiles.</li>
      <li><strong>Feedback inmediato</strong>: al guardar, se actualizan progreso y medallas sin recargar.</li>
      <li><strong>Estados vacíos claros</strong>: explicaciones y CTAs cuando aún no hay datos.</li>
    </ul>
  </div>

  {/* Accesibilidad: decisiones con sentido práctico */}
  <div className="space-y-2">
  <h3 className="text-xl font-bold text-[#e6f7ff]">Accesibilidad</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Contraste</strong> suficiente en textos y botones (paleta validada sobre #131b24).</li>
      <li><strong>Targets táctiles ≥ 44px</strong> en controles (huellas, botones, iconos).</li>
      <li><strong>Foco visible</strong> en elementos interactivos y <code>aria-label</code> en iconografía.</li>
      <li><strong>Lenguaje simple</strong> y <em>microcopy</em> guiado para usuarios no técnicos.</li>
      <li><strong>Sin dependencias de color</strong>: uso de iconos/estados además del color.</li>
    </ul>
  </div>

  {/* Nota legal/privacidad para la demo pública */}
  <div className="space-y-2">
    {/* <h3 className="text-xl font-bold">Privacidad y demo</h3>
    <p>
      La demo pública utiliza datos ficticios y controles de acceso. El repositorio permanece privado 
      y se comparte bajo solicitud para proteger propiedad intelectual.
    </p> */}
  </div>


    {/* ============== [PASO 4] PROCESO DE DISEÑO (FIGMA) ============== */}


    <div className="space-y-3 mt-8">
      <h3 className="text-xl font-bold text-[#e6f7ff]">Proceso de diseño (Figma)</h3>
      <p>
        Este es el <strong>prototipo inicial de diseño</strong> creado en Figma para definir el flujo guiado de pantallas: desde el onboarding, el registro en 2 pasos y la creación de plan centrada en problemas reales, hasta el dashboard principal. Este prototipo ha servido como base para el desarrollo y se ha ido <strong>mejorando progresivamente</strong> en aspectos clave de <strong>usabilidad</strong>, <strong>accesibilidad</strong> y <strong>diseño</strong> a medida que avanzaba el proyecto, adaptando la experiencia a las necesidades reales de los usuarios.
      </p>

      {/* Imagen Figma clicable → usa tu modal existente */}
      <div className="relative group cursor-pointer">
        <img
          src="/images/design.jpg"
          alt="Storyboard de Figma: onboarding, registro, creación de plan y dashboard de CanDo"
          loading="lazy"
          className="w-full rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
          onClick={() => openImage('/images/design.jpg')}
        />
        <p className="mt-2 text-sm text-[#a6b3c4]">
          Storyboard de diseño en Figma: de bienvenida a dashboard (mobile-first).
        </p>
      </div>
 {/* Línea divisoria decorativa */}
      <div className="w-full flex justify-center my-12">
        <div className="h-[1px] w-2/3 bg-gradient-to-r from-[#64ffda] via-[#233554] to-[#64ffda] rounded-full opacity-70 shadow-md"></div>
      </div>
      {/* ILUSTRACIONES CREADAS ---------🎨🎨 */}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#64ffda] text-center mb-8">Ilustraciones creadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer w-full flex justify-center">
              <img
                src="/images/first_register.png"
                alt="Ilustración medalla"
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
                onClick={() => openImage('/images/first_register.png', 'Diseño de la medalla inicial.')}
              />
            </div>
            <p className="mt-2 text-sm text-[#a6b3c4] text-center">Diseño de la medalla inicial.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer w-full flex justify-center">
              <img
                src="/images/loading.png"
                alt="Ilustración perro loading"
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
                onClick={() => openImage('/images/loading.png', 'Ilustración de perro en algunas pantallas de carga')}
              />
            </div>
            <p className="mt-2 text-sm text-[#a6b3c4] text-center">Ilustración de perro en algunas pantallas de carga</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer w-full flex justify-center">
              <img
                src="/images/tutorial2.png"
                alt="Ilustración tutorial planes"
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
                onClick={() => openImage('/images/tutorial2.png', 'Ilustración de sistema de planes en el tutorial.')}
              />
            </div>
            <p className="mt-2 text-sm text-[#a6b3c4] text-center">Ilustración de sistema de planes en el tutorial.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer w-full flex justify-center">
              <img
                src="/images/tutorial3.png"
                alt="Ilustración tutorial registro"
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
                onClick={() => openImage('/images/tutorial3.png', 'Ilustración del registro en el tutorial.')}
              />
            </div>
            <p className="mt-2 text-sm text-[#a6b3c4] text-center">Ilustración del registro en el tutorial.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer w-full flex justify-center">
              <img
                src="/images/sevendays.png"
                alt="Ilustración medalla de 7 días"
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
                onClick={() => openImage('/images/sevendays.png', 'Ilustración de medalla de 7 días.')}
              />
            </div>
            <p className="mt-2 text-sm text-[#a6b3c4] text-center">Ilustración de medalla de 7 días.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer w-full flex justify-center">
              <img
                src="/images/tutorial6.png"
                alt="Ilustración tutorial logros y medallas"
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
                onClick={() => openImage('/images/tutorial6.png', 'Ilustración de logros y medallas en el tutorial.')}
              />
            </div>
            <p className="mt-2 text-sm text-[#a6b3c4] text-center">Ilustración de logros y medallas en el tutorial.</p>
          </div>
        </div>
      </div>

      {/* FIN BLOQUE DE IMAGENES ILUSTRACIONES */}

      

      {/* Puntos clave del diseño (breve y accionable) */}
      <ul className="mt-20 list-disc pl-6 space-y-2">
        <li><strong>Onboarding</strong>: educa en 20–30 s; reduce dudas y rebote inicial.</li>
        <li><strong>Diseño amigable y agradable</strong>: campos intuitivos y bien espaciados. Dando especial atención al detalle visual y la jerarquía de la información.</li>
        <li><strong>Crear plan</strong>: problemas predefinidos → objetivos automáticos y comprensibles.</li>
        <li><strong>Dashboard</strong>: foco en progreso, medallas y CTA de “Registrar día”.</li>
        <li><strong>Microcopy</strong> y <strong>accesibilidad</strong>: contraste, targets ≥ 44px y foco visible.</li>
      </ul>

      {/* Línea divisoria decorativa */}
      <div className="w-full flex justify-center my-12">
        <div className="h-[1px] w-2/3 bg-gradient-to-r from-[#64ffda] via-[#233554] to-[#64ffda] rounded-full opacity-70 shadow-md"></div>
      </div>

      {/*  Enlace al archivo Figma  */}
      {/* <a href="" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] underline">
            Ver diseño en Figma
          </a> */}
    </div>
    {/* ============ [FIN PASO 4] PROCESO DE DISEÑO (FIGMA) ============ */}
</div>



{/* ====================== [PASO 3] ARQUITECTURA / BD ====================== */}
{/* 
    [OBJETIVO] Mostrar arquitectura general, esquema de BD, y decisiones clave
*/}

{/* [SECCIÓN] Arquitectura y datos */}
<div className="text-left max-w-3xl mx-auto space-y-5 mt-12">
  <h2 className="text-2xl font-semibold text-[#64ffda]">Arquitectura y esquema de datos</h2>
  <p>
    CanDo está construida con <strong>React</strong> (UI), <strong>Tailwind CSS</strong> (estilos) y 
    <strong> Supabase</strong> (auth, base de datos, almacenamiento). La lógica crítica de acceso a datos 
    se apoya en <strong>RLS</strong> (Row Level Security) para asegurar que cada usuario solo ve y modifica 
    lo que le pertenece.
  </p>

  {/* Mini‑galería de 2 imágenes: arquitectura general + esquema de tablas */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
    

    {/* Imagen 2: esquema de BD Supabase */}
    <div className="relative group cursor-pointer">
      <img
  src="/images/bd.png" // 
  alt="Esquema de tablas en Supabase para CanDo (users, dogs, plans, goals, daily_entries, daily_responses, medals, medals_obtained)"
  className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-lg bg-white"
  onClick={() => openImage('/images/bd.png')}
      />
      <p className="mt-2 text-sm text-[#a6b3c4]">Esquema de datos en Supabase con relaciones y claves foráneas</p>
    </div>
  </div>

  {/* Decisiones clave (breve y claro) */}
  <div className="space-y-2 mt-6">
    <h3 className="text-xl font-bold">Decisiones clave</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>RLS (Row Level Security)</strong>: políticas por tabla para <em>SELECT/INSERT/UPDATE/DELETE</em> 
        garantizando que cada usuario solo accede a sus propios perros, planes y registros diarios.
      </li>
      <li>
        <strong>Preguntas dinámicas por objetivo</strong>: cada <code>goal</code> tiene preguntas asociadas 
        en <code>questions</code>; al registrar el día, se generan <code>daily_entries</code> y 
        <code>daily_responses</code> según los objetivos activos.
      </li>
      <li>
        <strong>Medallas separadas</strong>: <code>medals</code> (catálogo) y  
        <code>medals_obtained</code> (histórico por perro/plan/fecha) permiten mostrar logros inmediatos 
        y acumulativos, y consultarlos por cronología o tipo.
      </li>
      
    </ul>
  </div>

  {/* Roadmap técnico (en una línea) */}
  <p className="text-sm text-[#a6b3c4] mt-2">
    Roadmap: resúmenes semanales/mensuales, revisión de plan y ampliación de tips contextuales por problema.
  </p>
</div>
{/* ==================== [FIN PASO 3] ARQUITECTURA / BD ==================== */}



        {/* [MANTENIDO] Modal de imagen ampliada */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50 select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="relative flex flex-col items-center gap-6">
              <img
                ref={imgRef}
                src={selectedImage}
                alt="Ampliada"
                className={`max-w-[90vw] max-h-[70vh] rounded-lg shadow-2xl ${isZoomable ? 'cursor-grab' : ''}`}
                style={isZoomable ? {
                  transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                  transition: dragging ? 'none' : 'transform 0.2s',
                  cursor: dragging ? 'grabbing' : (zoom > 1 ? 'grab' : 'zoom-in'),
                } : {}}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
              {isZoomable && zoom > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#222d3a] bg-opacity-80 text-[#64ffda] px-3 py-1 rounded text-xs shadow">Arrastra para mover. Doble click para resetear.</div>
              )}
              {isZoomable && (
                <button
                  className="absolute bottom-2 right-2 text-white text-base bg-[#828383] px-3 py-1 rounded hover:bg-[#3e4140] transition"
                  onClick={() => { setZoom(1); setOffset({ x: 0, y: 0 }); }}
                >
                  Reset zoom
                </button>
              )}
              <button
                className="absolute top-4 right-4 text-white text-3xl bg-[#828383] p-2 rounded-full hover:bg-[#3e4140] transition"
                onClick={closeImage}
                aria-label="Cerrar"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* [MANTENIDO] Panel flotante / barra inferior, con enlaces actualizados */}
        <div className="z-50 text-white text-sm md:text-base">
          {/* Escritorio: panel lateral */}
          <div className="hidden sm:fixed sm:top-1/3 sm:right-5 sm:flex sm:flex-col sm:gap-5">

            {/* Volver */}
            <Link
              to="/"
              className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
            >
              <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                Volver atrás
              </span>
              <FaArrowLeft className="text-[22px] md:text-[26px]" />
            </Link>

            {/* Ver proyecto (DEMO en producción) */}
            <a
              href="https://cando.tu-dominio.com" // TODO: reemplaza por tu deploy real
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
            >
              <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                Ver demo
              </span>
              <FaExternalLinkAlt className="text-[22px] md:text-[26px]" />
            </a>

            {/* GitHub (privado o acceso por solicitud) */}
            <a
              href="https://github.com/Albertojs89/cando" // TODO: si es privado, puedes enlazar a un README público/landing del repo
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end gap-2 px-2 py-1 rounded-md hover:text-[#64ffda] transition-all duration-300 bg-[#131b24]/70 backdrop-blur-sm"
              title="Código bajo solicitud"
            >
              <span className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                Código (bajo solicitud)
              </span>
              <FaGithub className="text-[22px] md:text-[26px]" />
            </a>
          </div>

          {/* Móvil: barra inferior */}
          <div className="fixed bottom-2 left-0 right-0 mx-auto flex justify-center gap-6 sm:hidden">
            <Link
              to="/"
              className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
            >
              <FaArrowLeft className="text-xl" />
            </Link>
            <a
              href="https://cando.tu-dominio.com" // TODO
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
            <a
              href="https://github.com/Albertojs89/cando" // TODO
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#131b24]/80 backdrop-blur-sm rounded-full hover:text-[#64ffda] transition"
              title="Código bajo solicitud"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CanDoDetalles;

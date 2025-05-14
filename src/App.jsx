// App.jsx
import Layout from './components/Layout';
import About from './sections/About';
import Skills from './sections/Skills'; 
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import XaviDetalles from './sections/XaviDetalles';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <About />
          <Skills />
          <section id="projects" className="observe-target"><Projects /></section>
          <Contact />
        </Layout>
      } />

      {/* Ruta de detalles de proyecto Xavi */}
      <Route path="/xavi-detalles" element={<XaviDetalles />} />
    </Routes>
  );
}

export default App;

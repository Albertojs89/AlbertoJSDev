import Layout from './components/Layout';
import About from './sections/About';
import Skills from './sections/Skills'; // ✅ Aquí estaba el fallo
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ExperienceEducation from '../components/ExperienceEducation';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ExperienceEducation />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
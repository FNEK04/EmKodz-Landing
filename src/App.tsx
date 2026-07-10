import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import SEO from './components/SEO';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SettingsProvider } from './contexts/SettingsContext';

export default function App() {
  return (
    <SettingsProvider>
      <SEO />
      <div className="min-h-screen bg-[#fbf9f6] dark:bg-[#050505] transition-colors duration-700 ease-out">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <TechStack />
          <Portfolio />
          <Calculator />
          <Reviews />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </SettingsProvider>
  );
}


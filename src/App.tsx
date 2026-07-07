import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortalsSection from './components/PortalsSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import GamificationSection from './components/GamificationSection';
import AITutorWidget from './components/AITutorWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#110515] transition-colors duration-500 font-sans relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <PortalsSection />
        <StatsSection />
        <GamificationSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
      <AITutorWidget />
    </div>
  );
}

export default App;

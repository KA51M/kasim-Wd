
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

function App() {
  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen overflow-x-clip text-white selection:bg-white/20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default App;

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from '../LiveProjectButton';
import { FadeIn } from '../FadeIn';

const projects = [
  {
    num: "01",
    client: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    client: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    client: "Client",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

const ProjectCard = ({ project, i, totalCards, progress }: { project: any, i: number, totalCards: number, progress: MotionValue<number> }) => {
  const targetScale = 1 - (totalCards - 1 - i) * 0.03;
  const scale = useTransform(progress, [i * 0.25, 1], [1, targetScale]);

  return (
    <div 
      className="sticky w-full flex items-start justify-center"
      style={{ top: `calc(6rem + ${i * 28}px)` }}
    >
      <motion.div 
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8"
        style={{ 
          scale,
          transformOrigin: 'top center'
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0">
          <div className="flex items-end gap-4 sm:gap-8">
            <span 
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="pb-2 sm:pb-4">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm block mb-1">
                {project.client}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="pb-2 sm:pb-4 flex-shrink-0">
            <LiveProjectButton />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full mt-2">
          {/* Left Column - 40% */}
          <div className="w-full sm:w-[40%] flex flex-col gap-4 sm:gap-6">
            <img 
              src={project.images.col1_1} 
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img 
              src={project.images.col1_2} 
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          
          {/* Right Column - 60% */}
          <div className="w-full sm:w-[60%] flex">
            <img 
              src={project.images.col2} 
              alt={`${project.name} preview 3`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[300px] sm:h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full">
      <FadeIn delay={0.1} y={40} className="w-full mb-16 sm:mb-20 md:mb-28 text-center">
        <h2 
          className="hero-heading font-black uppercase leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.num} 
            project={project} 
            i={i} 
            totalCards={projects.length} 
            progress={scrollYProgress}
          />
        ))}
        {/* Spacer to allow the last card to stick and overlap completely before section ends */}
        <div className="h-[50vh] sm:h-[60vh] md:h-[80vh]"></div>
      </div>
    </section>
  );
};

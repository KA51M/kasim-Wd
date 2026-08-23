import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../FadeIn';
import { ProjectImageCarousel } from '../ProjectImageCarousel';

interface ProjectItem {
  num: string;
  title: string;
  desc: string;
  images: string[];
  liveUrl?: string;
}

const projects: ProjectItem[] = [
  {
    num: "01",
    title: "PRAMUKH NEURO PSYCHIATRY",
    desc: "Modern healthcare web platform with online appointment scheduling, doctor specialist profiles, and patient care resources.",
    images: [
      "/project images/project_1/img-1.png",
      "/project images/project_1/img-2.png",
      "/project images/project_1/img-3.png",
      "/project images/project_1/img-4.png",
      "/project images/project_1/img-5.png"
    ],
    liveUrl: "#"
  },
  {
    num: "02",
    title: "BISMILLAH DHABA / RESTAURANT",
    desc: "Vibrant culinary web portal featuring interactive digital food menus, table reservations, and seamless WhatsApp ordering.",
    images: [
      "/project images/project_2/img-1.png",
      "/project images/project_2/img-2.png",
      "/project images/project_2/3.png",
      "/project images/project_2/img-4.png",
      "/project images/project_2/img-5.png"
    ],
    liveUrl: "#"
  },
  {
    num: "03",
    title: "FORAM LABORATORY",
    desc: "Diagnostic pathology laboratory portal offering home sample collection booking, comprehensive health test packages, and online reports.",
    images: [
      "/project images/project_3/img-1.png",
      "/project images/project_3/img-2.png",
      "/project images/project_3/img-3.png",
      "/project images/project_3/img-4.png",
      "/project images/project_3/img-5.png"
    ],
    liveUrl: "#"
  },
  {
    num: "04",
    title: "SR DENTAL STUDIO",
    desc: "High-end dental aesthetic clinic website showcasing smile makeover galleries, treatment guides, and online appointment booking.",
    images: [
      "/project images/project_4/img-1.png",
      "/project images/project_4/img-2.png",
      "/project images/project_4/img-3.png",
      "/project images/project_4/img-4.png",
      "/project images/project_4/img-5.png"
    ],
    liveUrl: "#"
  }
];

const ProjectCard = memo(({ project }: { project: ProjectItem }) => {
  const projectIndex = parseInt(project.num, 10) || 1;
  const autoPlayInterval = 3200 + (projectIndex % 4) * 700; // Distinct slider speeds
  const initialDelay = 900 + (projectIndex - 1) * 1100; // Distinct start times

  return (
    <div className="w-full">
      {/* MOBILE LAYOUT (< md) - Matching Reference Image */}
      <div className="flex flex-col md:hidden w-full">
        {/* Row 1: Number on Left + 16:9 Image Carousel Card on Right */}
        <div className="flex items-center justify-between gap-4 w-full mb-4">
          <div 
            className="text-[#0C0C0C] font-black leading-none tracking-tight flex-shrink-0 select-none"
            style={{ fontSize: 'clamp(3rem, 14vw, 5rem)' }}
          >
            {project.num}
          </div>

          <div className="flex-1 max-w-[70%] sm:max-w-[72%] aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative">
            <ProjectImageCarousel
              images={project.images}
              title={project.title}
              autoPlayInterval={autoPlayInterval}
              initialDelay={initialDelay}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Row 2: Full Width Project Heading */}
        <h3 className="text-[#0C0C0C] font-bold uppercase tracking-tight text-lg sm:text-xl mb-2">
          {project.title}
        </h3>

        {/* Row 3: Full Width Description */}
        <p className="text-[#0C0C0C]/70 font-normal leading-relaxed text-[13px] sm:text-sm mb-4">
          {project.desc}
        </p>

        {/* Row 4: 2 Buttons on the Left Side */}
        <div className="flex items-center gap-3 w-full pt-1">
          <a
            href={project.liveUrl || "#"}
            className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#0C0C0C] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-xs"
          >
            <span>VIEW LIVE PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center text-[#0C0C0C] text-[11px] font-bold uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
          >
            LEARN MORE
          </button>
        </div>
      </div>

      {/* DESKTOP LAYOUT (>= md) */}
      <div className="hidden md:flex md:flex-row md:items-start w-full">
        {/* Number on Left */}
        <div 
          className="text-[#0C0C0C] font-black leading-none md:w-1/3 mb-4 md:mb-0 transition-transform duration-300 group-hover:translate-x-1 select-none"
          style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
        >
          {project.num}
        </div>
        
        {/* Content on Right */}
        <div className="md:w-2/3 flex flex-col justify-center h-full pt-2 md:pt-4">
          {/* Heading and 16:9 Carousel Card in Row */}
          <div className="flex flex-row items-center justify-between gap-4 mb-2 sm:mb-2.5">
            <h3 
              className="text-[#0C0C0C] font-medium uppercase tracking-tight flex-1 pr-2 group-hover:text-black transition-colors"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.95rem)' }}
            >
              {project.title}
            </h3>

            {/* 16:9 Image Carousel beside Heading */}
            <div className="flex-shrink-0 self-center">
              <div className="w-52 lg:w-64 aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-300/80 bg-neutral-900 shadow-[0_4px_16px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:border-neutral-400 transition-all duration-300 relative">
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                  autoPlayInterval={autoPlayInterval}
                  initialDelay={initialDelay}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <p 
            className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60 line-clamp-2"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
          >
            {project.desc}
          </p>

          {/* Bottom Row: 2 Action Buttons on Left */}
          <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-5 pt-1">
            <a
              href={project.liveUrl || "#"}
              className="group/btn inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#0C0C0C] text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <span>View Live Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </a>

            <button
              type="button"
              className="inline-flex items-center px-1 py-1 text-[#0C0C0C] text-xs sm:text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const initialProjects = projects.slice(0, 3);
  const hiddenProjects = projects.slice(3);

  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10">
      <FadeIn delay={0.1} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 
          className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {/* First 3 Projects (Always Visible & Never Re-rendered on Load More) */}
        {initialProjects.map((project, i) => (
          <FadeIn 
            key={project.num} 
            delay={i * 0.1}
            className="border-t border-[rgba(12,12,12,0.15)] py-7 sm:py-9 md:py-12 w-full group transition-colors duration-200"
          >
            <ProjectCard project={project} />
          </FadeIn>
        ))}

        {/* Hidden Projects (Smoothly Unfolded when Load More is clicked) */}
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden flex flex-col w-full"
            >
              {hiddenProjects.map((project, idx) => (
                <motion.div 
                  key={project.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-[rgba(12,12,12,0.15)] py-7 sm:py-9 md:py-12 w-full group transition-colors duration-200"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom border to last item */}
        <div className="border-t border-[rgba(12,12,12,0.15)] w-full"></div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <button
            type="button"
            onClick={() => setShowAll(prev => !prev)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-[#0C0C0C] text-white font-medium uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:bg-neutral-800 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "Load More Projects"}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};


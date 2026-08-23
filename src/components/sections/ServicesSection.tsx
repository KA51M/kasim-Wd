import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../FadeIn';

interface ProjectItem {
  num: string;
  title: string;
  desc: string;
  image: string;
  liveUrl?: string;
}

const projects: ProjectItem[] = [
  {
    num: "01",
    title: "PRAMUKH NEURO PSYCHIATRY",
    desc: "Modern healthcare web platform with online appointment scheduling, doctor specialist profiles, and patient care resources.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=640&q=80",
    liveUrl: "#"
  },
  {
    num: "02",
    title: "BISMILLAH DHABA / RESTAURANT",
    desc: "Vibrant culinary web portal featuring interactive digital food menus, table reservations, and seamless WhatsApp ordering.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=640&q=80",
    liveUrl: "#"
  },
  {
    num: "03",
    title: "FORAM LABORATORY",
    desc: "Diagnostic pathology laboratory portal offering home sample collection booking, comprehensive health test packages, and online reports.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=640&q=80",
    liveUrl: "#"
  },
  {
    num: "04",
    title: "SR DENTAL STUDIO",
    desc: "High-end dental aesthetic clinic website showcasing smile makeover galleries, treatment guides, and online appointment booking.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=640&q=80",
    liveUrl: "#"
  }
];

const TechStackBadges = ({ liveUrl, isMobile }: { liveUrl?: string; isMobile?: boolean }) => (
  <div className="flex items-center">
    {/* Overlapping Tech Badges with black background and white border */}
    <div className="flex items-center">
      {/* React Badge */}
      <div 
        className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12'} rounded-full bg-black border-2 border-white flex items-center justify-center shadow-md relative z-10 hover:scale-110 hover:z-30 transition-transform duration-200`}
        title="React"
      >
        <svg className={`${isMobile ? 'w-4.5 h-4.5' : 'w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-7 md:h-7'}`} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      </div>

      {/* JS Badge */}
      <div 
        className={`${isMobile ? 'w-8 h-8 -ml-2' : 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 -ml-3 sm:-ml-3.5'} rounded-full bg-black border-2 border-white flex items-center justify-center shadow-md relative z-20 hover:scale-110 hover:z-30 transition-transform duration-200`}
        title="JavaScript"
      >
        <div className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6'} rounded-xs overflow-hidden flex items-center justify-center`}>
          <svg className="w-full h-full" viewBox="0 0 630 630">
            <rect width="630" height="630" fill="#F7DF1E"/>
            <path d="M170.4 461.3c13.7 8.3 31.4 14.7 50.4 14.7 28.7 0 45.4-14.1 45.4-34.9 0-20.2-12.7-30.8-37.7-41.5l-13-5.5c-37.1-15.7-61.5-35.7-61.5-73.4 0-41.1 31.8-72.4 81.6-72.4 29.3 0 50.8 7.3 64.9 15.6l-15.6 37.8c-10.8-6.4-27.7-12.7-48.7-12.7-24 0-38.6 11.8-38.6 28.8 0 18.6 12.2 27.4 34.9 37.2l13 5.5c42.1 18.1 66.8 37.2 66.8 77.8 0 44.5-34.7 75.3-90.9 75.3-33.8 0-61.2-8.8-76.3-17.6zm192.8-19.1c11.7 6.4 26.9 10.8 42.6 10.8 24 0 38.6-11.3 38.6-30.8V254h46.9v169.3c0 46.5-27.4 72.4-78.2 72.4-27.4 0-51.8-8.8-65-17.6z" fill="#000000"/>
          </svg>
        </div>
      </div>

      {/* HTML5 Badge */}
      <div 
        className={`${isMobile ? 'w-8 h-8 -ml-2' : 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 -ml-3 sm:-ml-3.5'} rounded-full bg-black border-2 border-white flex items-center justify-center shadow-md relative z-30 hover:scale-110 hover:z-30 transition-transform duration-200`}
        title="HTML5"
      >
        <svg className={`${isMobile ? 'w-3.5 h-3.5' : 'w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5'}`} viewBox="0 0 512 512" fill="none">
          <path fill="#E44D26" d="M107.6 466.8L67.1 12.6h377.8l-40.5 454.1L256 500z"/>
          <path fill="#F16529" d="M256 463.3l119.8-33.2 34.6-387.8H256z"/>
          <path fill="#EBEBEB" d="M256 207.2h-62.4l-4.3-48.4H256V111H136.2l12.8 144.6H256zm0 148.6l-.6.2-52.2-14.1-3.3-37.4h-48.4l6.6 74.4 97.9 27.2z"/>
          <path fill="#FFFFFF" d="M256 207.2h62.4l-5.9 66-56.5 15.3v50.4l98.9-27.4.7-7.9 11.2-125.6 1.4-15.2H256zm0-96.2v47.8h115.5l4.3-47.8z"/>
        </svg>
      </div>
    </div>

    {/* Circular Arrow Button */}
    <a
      href={liveUrl || "#"}
      className={`${isMobile ? 'w-8 h-8 ml-2' : 'w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 ml-2.5 sm:ml-3'} rounded-full bg-white border-2 border-black flex items-center justify-center shadow-xs hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group/circle`}
      aria-label="View Project"
    >
      <svg 
        className={`${isMobile ? 'w-3.5 h-3.5' : 'w-3.5 h-3.5 sm:w-4 sm:h-4'} text-black stroke-[3.5] group-hover/circle:translate-x-0.5 transition-transform duration-200`} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
  </div>
);

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
        {/* First 3 Projects (Always Visible) */}
        {initialProjects.map((project, i) => (
          <FadeIn 
            key={project.num} 
            delay={i * 0.1}
            className="border-t border-[rgba(12,12,12,0.15)] py-7 sm:py-9 md:py-12 w-full group transition-colors duration-200"
          >
            {/* MOBILE LAYOUT (< md) - Matching Reference Image */}
            <div className="flex flex-col md:hidden w-full">
              {/* Row 1: Number on Left + 16:9 Image Card on Right */}
              <div className="flex items-center justify-between gap-4 w-full mb-4">
                <div 
                  className="text-[#0C0C0C] font-black leading-none tracking-tight flex-shrink-0 select-none"
                  style={{ fontSize: 'clamp(3rem, 14vw, 5rem)' }}
                >
                  {project.num}
                </div>

                <div className="flex-1 max-w-[70%] sm:max-w-[72%] aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative">
                  <img 
                    src={project.image} 
                    alt={`${project.title} Preview`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
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

              {/* Row 4: Bottom bar with Tech Stack on Left and Buttons on Right */}
              <div className="flex items-center justify-between gap-2 w-full pt-1">
                <TechStackBadges liveUrl={project.liveUrl} isMobile />

                <div className="flex items-center gap-3 flex-shrink-0">
                  <a
                    href={project.liveUrl || "#"}
                    className="inline-flex items-center justify-center px-3.5 py-2 rounded-md bg-[#0C0C0C] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-xs"
                  >
                    VIEW LIVE PROJECT
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center text-[#0C0C0C] text-[11px] font-bold uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP LAYOUT (>= md) */}
            <div className="hidden md:flex md:flex-row md:items-start w-full">
              {/* Number on Left */}
              <div 
                className="text-[#0C0C0C] font-black leading-none md:w-1/3 mb-4 md:mb-0 transition-transform duration-300 group-hover:translate-x-1"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.num}
              </div>
              
              {/* Content on Right */}
              <div className="md:w-2/3 flex flex-col justify-center h-full pt-2 md:pt-4">
                {/* Heading and 16:9 Image Card in Row */}
                <div className="flex flex-row items-center justify-between gap-4 mb-2 sm:mb-2.5">
                  <h3 
                    className="text-[#0C0C0C] font-medium uppercase tracking-tight flex-1 pr-2 group-hover:text-black transition-colors"
                    style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.95rem)' }}
                  >
                    {project.title}
                  </h3>

                  {/* 16:9 Fake Image Card beside Heading */}
                  <div className="flex-shrink-0 self-center">
                    <div className="w-48 lg:w-60 aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-300/80 bg-neutral-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:border-neutral-400 transition-all duration-300 relative">
                      <img 
                        src={project.image} 
                        alt={`${project.title} Preview`} 
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 z-10 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-white/90">
                        16:9 Fake
                      </div>
                      <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 z-10 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[8px] sm:text-[9px] font-medium text-white/90 border border-white/10">
                        <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                        <span>Preview</span>
                      </div>
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

                {/* Bottom Row: Widget on Left, Action Buttons on Right */}
                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-5 pt-1">
                  <TechStackBadges liveUrl={project.liveUrl} />

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
          </FadeIn>
        ))}

        {/* Hidden Projects (Revealed when Load More is clicked) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden flex flex-col w-full"
            >
              {hiddenProjects.map((project) => (
                <div 
                  key={project.num}
                  className="border-t border-[rgba(12,12,12,0.15)] py-7 sm:py-9 md:py-12 w-full group transition-colors duration-200"
                >
                  {/* MOBILE LAYOUT (< md) - Matching Reference Image */}
                  <div className="flex flex-col md:hidden w-full">
                    {/* Row 1: Number on Left + 16:9 Image Card on Right */}
                    <div className="flex items-center justify-between gap-4 w-full mb-4">
                      <div 
                        className="text-[#0C0C0C] font-black leading-none tracking-tight flex-shrink-0 select-none"
                        style={{ fontSize: 'clamp(3rem, 14vw, 5rem)' }}
                      >
                        {project.num}
                      </div>

                      <div className="flex-1 max-w-[70%] sm:max-w-[72%] aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative">
                        <img 
                          src={project.image} 
                          alt={`${project.title} Preview`} 
                          className="w-full h-full object-cover"
                          loading="lazy"
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

                    {/* Row 4: Bottom bar with Tech Stack on Left and Buttons on Right */}
                    <div className="flex items-center justify-between gap-2 w-full pt-1">
                      <TechStackBadges liveUrl={project.liveUrl} isMobile />

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <a
                          href={project.liveUrl || "#"}
                          className="inline-flex items-center justify-center px-3.5 py-2 rounded-md bg-[#0C0C0C] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-xs"
                        >
                          VIEW LIVE PROJECT
                        </a>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center text-[#0C0C0C] text-[11px] font-bold uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                        >
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP LAYOUT (>= md) */}
                  <div className="hidden md:flex md:flex-row md:items-start w-full">
                    {/* Number on Left */}
                    <div 
                      className="text-[#0C0C0C] font-black leading-none md:w-1/3 mb-4 md:mb-0 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                    >
                      {project.num}
                    </div>
                    
                    {/* Content on Right */}
                    <div className="md:w-2/3 flex flex-col justify-center h-full pt-2 md:pt-4">
                      {/* Heading and 16:9 Image Card in Row */}
                      <div className="flex flex-row items-center justify-between gap-4 mb-2 sm:mb-2.5">
                        <h3 
                          className="text-[#0C0C0C] font-medium uppercase tracking-tight flex-1 pr-2 group-hover:text-black transition-colors"
                          style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.95rem)' }}
                        >
                          {project.title}
                        </h3>

                        {/* 16:9 Fake Image Card beside Heading */}
                        <div className="flex-shrink-0 self-center">
                          <div className="w-48 lg:w-60 aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-300/80 bg-neutral-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:border-neutral-400 transition-all duration-300 relative">
                            <img 
                              src={project.image} 
                              alt={`${project.title} Preview`} 
                              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 z-10 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-white/90">
                              16:9 Fake
                            </div>
                            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 z-10 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[8px] sm:text-[9px] font-medium text-white/90 border border-white/10">
                              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                              <span>Preview</span>
                            </div>
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

                      {/* Bottom Row: Widget on Left, Action Buttons on Right */}
                      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-5 pt-1">
                        <TechStackBadges liveUrl={project.liveUrl} />

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom border to last item */}
        <div className="border-t border-[rgba(12,12,12,0.15)] w-full"></div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-[#0C0C0C] text-white font-medium uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:bg-neutral-800 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "Load More Projects"}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
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

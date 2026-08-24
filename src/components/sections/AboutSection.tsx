
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { FadeIn } from '../FadeIn';

const titles = [
  {
    lines: [
      "Building Solution",
      "Through",
      "Code And Creativity"
    ]
  },
  {
    lines: [
      "A Developer Who",
      "Turns",
      "Problems Into Products"
    ]
  }
];

const features = [
  {
    num: "01",
    title: "Clean Design"
  },
  {
    num: "02",
    title: "Fast Performance"
  },
  {
    num: "03",
    title: "Scalable Development"
  },
  {
    num: "04",
    title: "Client Satisfaction"
  }
];

const CTAButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-row items-center gap-3.5 sm:gap-6 pt-1 w-full max-w-full ${className}`}>
    {/* CTA 1: Contact Me */}
    <a
      href="mailto:kasim@example.com"
      className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 md:px-7 py-2.5 sm:py-3.5 rounded-xs bg-white text-[#0C0C0C] text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm shrink-0 whitespace-nowrap"
    >
      <span>Contact Me</span>
      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0C0C0C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </a>

    {/* CTA 2: Download Resume */}
    <a
      href="/Kasim_Resume.pdf"
      download="Kasim_Resume.pdf"
      className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 text-white text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider py-1 relative cursor-pointer shrink-0 whitespace-nowrap"
    >
      <span>Download Resume</span>
      <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-y-0.5 transition-transform duration-200" />
      {/* Clean bottom underline */}
      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transition-all duration-200 group-hover:opacity-60"></span>
    </a>
  </div>
);

export const AboutSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="about" 
      className="bg-[#0C0C0C] z-10 relative px-5 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 w-full overflow-hidden"
    >
      {/* Top Page Heading */}
      <FadeIn delay={0.1} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-24">
        <h2 
          className="hero-heading font-black uppercase leading-none tracking-tight select-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Main 2-Column Content Grid */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Alternating Heading, 2-line Description & Desktop CTAs */}
        <FadeIn delay={0.2} y={30} className="lg:col-span-7 flex flex-col items-start text-left w-full pr-0 lg:pr-6">
          {/* Animated Alternating Heading Container with CSS Grid stack to eliminate layout shift */}
          <div className="w-full grid grid-cols-1 [grid-template-areas:'stack'] items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h3 
                key={titleIndex}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="[grid-area:stack] text-white font-extrabold uppercase tracking-tight leading-[1.12] w-full text-left"
                style={{ fontSize: 'clamp(1.5rem, 3.8vw, 2.75rem)' }}
              >
                {titles[titleIndex].lines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </motion.h3>
            </AnimatePresence>
          </div>

          <p className="text-neutral-400 font-normal leading-relaxed text-sm sm:text-base md:text-lg mt-4 sm:mt-5 max-w-lg text-left">
            I specialize in crafting high-performing, scalable digital experiences that seamlessly blend clean architecture with intuitive, engaging design.
          </p>

          {/* Desktop Only CTAs */}
          <div className="hidden lg:flex mt-7 sm:mt-9 w-full">
            <CTAButtons className="justify-start" />
          </div>
        </FadeIn>

        {/* Right Column: Numbered Points with Dividers (Compact Width) */}
        <FadeIn delay={0.3} y={30} className="lg:col-span-5 flex flex-col w-full max-w-md lg:max-w-[400px] lg:ml-auto mt-6 lg:mt-0">
          <div className="flex flex-col w-full border-t border-neutral-800">
            {features.map((item) => (
              <div
                key={item.num}
                className="group flex items-center justify-between py-4 sm:py-5 md:py-6 border-b border-neutral-800 px-2 sm:px-3 transition-colors duration-200 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
                  {/* Number */}
                  <span className="font-semibold text-sm sm:text-base md:text-lg text-neutral-400 group-hover:text-white tracking-tight w-6 select-none transition-colors">
                    {item.num}
                  </span>

                  {/* Title */}
                  <span className="font-medium text-sm sm:text-base md:text-lg text-white tracking-tight">
                    {item.title}
                  </span>
                </div>

                {/* Subtle Right Indicator on Hover */}
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-1" />
              </div>
            ))}
          </div>

          {/* Mobile Only Centered CTAs Below 4 Points */}
          <div className="flex lg:hidden justify-center items-center w-full mt-10">
            <CTAButtons className="justify-center" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

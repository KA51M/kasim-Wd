
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../FadeIn';
import { ContactButton } from '../ContactButton';

const TypingText = ({ text, delay = 0.5 }: { text: string; delay?: number }) => {
  const words = text.split(" ");
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.01 } 
    }
  };

  return (
    <motion.span 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      className="inline-block"
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
          {Array.from(word).map((letter, letterIdx) => (
            <motion.span 
              key={letterIdx} 
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the hero section from start to end of scroll off
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Background name exit scroll animations: fade out and translate right
  const nameOpacity = useTransform(scrollYProgress, [0, 0.75], [0.9, 0]);
  const nameX = useTransform(scrollYProgress, [0, 0.75], [0, 250]);

  // Main character image exit scroll animations: fade out and translate up
  const imageOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.75], [0, -180]);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen flex flex-col justify-between overflow-x-clip relative w-full bg-[#0C0C0C]"
    >
      {/* Top Navigation */}
      <FadeIn delay={0} y={-20} className="w-full z-30 relative">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
          {/* Desktop Nav */}
          <div className="hidden md:flex justify-between items-center w-full">
            {["About", "Price", "Projects", "Contact"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden justify-between items-center w-full px-1">
            <span className="text-white font-black text-[1.6rem] tracking-wider uppercase">Kasim</span>
            <button className="text-white flex flex-col justify-center items-end gap-[6px] w-9 h-9 group cursor-pointer" aria-label="Menu">
              <span className="w-9 h-[3px] bg-white rounded-full transition-all duration-300 group-hover:w-7"></span>
              <span className="w-9 h-[3px] bg-white rounded-full"></span>
              <span className="w-7 h-[3px] bg-white rounded-full transition-all duration-300 group-hover:w-9"></span>
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Visual Area: Large background text & centered foreground image */}
      <div className="absolute inset-0 flex flex-col justify-start items-center pointer-events-none overflow-hidden z-10 w-full">
        {/* Background Text Wrapper (handles exit scroll animation) */}
        <motion.div 
          style={{ x: nameX, opacity: nameOpacity, willChange: "transform, opacity" }}
          className="w-full text-center relative z-10 select-none px-4 pt-[14vh] sm:pt-[16vh] md:pt-[22vh] lg:pt-[24vh]"
        >
          {/* Inner Text Wrapper (handles initial mount entry animation) */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="w-full"
          >
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.75] text-center text-[30vw] sm:text-[24vw] md:text-[16vw] lg:text-[16.5vw] whitespace-normal">
              Hi, i&apos;m <br className="md:hidden" /> kasim
            </h1>
          </motion.div>
        </motion.div>

        {/* Character Image Wrapper (handles exit scroll animation) */}
        <motion.div 
          style={{ y: imageY, opacity: imageOpacity, willChange: "transform, opacity" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex items-end justify-center w-full"
        >
          {/* Inner Image Wrapper (handles initial mount entry animation) */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className="flex items-end justify-center w-full"
          >
            <img 
              src="/mainCharacter.png" 
              alt="Kasim - Main Character" 
              className="h-[72vh] sm:h-[75vh] md:h-[75vh] lg:h-[80vh] w-auto object-contain object-bottom max-w-none md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[45vw]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Content (Info & Button) */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex flex-col md:flex-row justify-between items-center md:items-end w-full z-30 relative pointer-events-none gap-5 md:gap-0">
        <div className="pointer-events-auto text-center md:text-left max-w-[90vw] sm:max-w-[80vw] md:max-w-[280px]">
          <p 
            className="text-[#D7E2EA] font-semibold uppercase tracking-wide leading-snug"
            style={{ 
              fontSize: 'clamp(0.85rem, 3.4vw, 1.1rem)',
              textShadow: '0px 2px 8px rgba(0, 0, 0, 0.9)'
            }}
          >
            <TypingText 
              text="A full stack developer driven by building modern, high-performing, and visually engaging web experiences."
              delay={0.65}
            />
          </p>
        </div>
        
        <FadeIn delay={1.4} y={20} className="pointer-events-auto w-full md:w-auto flex justify-center">
          <ContactButton className="w-full md:w-auto max-w-[90vw] md:max-w-none" />
        </FadeIn>
      </div>
    </section>
  );
};



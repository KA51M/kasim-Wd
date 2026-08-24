
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Mail, X, ArrowUpRight } from 'lucide-react';
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

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    )
  },
  {
    name: "Email",
    url: "mailto:kasim@example.com",
    icon: (
      <Mail className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
    )
  }
];

const iconWaveVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.84,
    rotate: -6,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.85 + i * 0.12,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  })
};

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const navItems = [
    { name: "Home", href: "#home", tag: "Start" },
    { name: "About", href: "#about", tag: "Bio & Tech Stack" },
    { name: "Projects", href: "#projects", tag: "Selected Works" },
    { name: "Service", href: "#services", tag: "Client Solutions" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleNavClick(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <section 
      ref={sectionRef} 
      id="home"
      className="h-screen flex flex-col justify-between overflow-x-clip relative w-full bg-[#0C0C0C]"
    >
      {/* Top Navigation */}
      <FadeIn delay={0} y={-20} className="w-full z-30 relative">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
          {/* Desktop Nav */}
          <div className="hidden md:flex justify-between items-center w-full">
            {navItems.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden justify-between items-center w-full px-1">
            <span className="text-white font-black text-[1.6rem] tracking-wider uppercase select-none">Kasim</span>
            <button 
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white flex flex-col justify-center items-end gap-[6px] w-9 h-9 group cursor-pointer" 
              aria-label="Open menu"
            >
              <span className="w-9 h-[3px] bg-white rounded-full transition-all duration-300 group-hover:w-7"></span>
              <span className="w-9 h-[3px] bg-white rounded-full"></span>
              <span className="w-7 h-[3px] bg-white rounded-full transition-all duration-300 group-hover:w-9"></span>
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* Mobile White Sidebar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/65 backdrop-blur-xs z-50 md:hidden"
            />

            {/* White Sidebar Drawer Sliding from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-[86vw] sm:w-[70vw] max-w-[380px] bg-white text-[#0C0C0C] z-50 shadow-[-16px_0_50px_rgba(0,0,0,0.35)] flex flex-col justify-between p-6 sm:p-8 md:hidden select-none overflow-y-auto"
            >
              {/* Top Bar: Brand + Subtitle & Close Button */}
              <div className="flex items-center justify-between w-full pb-5 border-b border-neutral-200/80">
                <div className="flex flex-col">
                  <span className="text-[#0C0C0C] font-black text-2xl tracking-wider uppercase leading-none">
                    Kasim
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-neutral-400 mt-1.5">
                    Full Stack Dev
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 active:scale-90 text-black flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links Area */}
              <div className="flex flex-col my-auto py-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-400 mb-3 px-1">
                  Navigation
                </span>

                <div className="flex flex-col divide-y divide-neutral-100">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex items-center justify-between py-4 px-1 text-[#0C0C0C] hover:text-neutral-600 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-3.5">
                        <span className="font-mono text-xs font-semibold text-neutral-400 group-hover:text-black transition-colors">
                          0{idx + 1}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-black text-2xl sm:text-[28px] uppercase tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                            {item.name}
                          </span>
                          <span className="text-[11px] font-medium text-neutral-400 group-hover:text-neutral-500 transition-colors">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom Drawer Footer: Get In Touch & Pure Black Icons */}
              <div className="border-t border-neutral-200/80 pt-5 flex flex-col gap-4">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                    Get in touch
                  </span>
                  <div className="flex items-center gap-5 pt-0.5">
                    {[
                      {
                        name: "LinkedIn",
                        url: "https://linkedin.com",
                        icon: (
                          <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        )
                      },
                      {
                        name: "GitHub",
                        url: "https://github.com",
                        icon: (
                          <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )
                      },
                      {
                        name: "WhatsApp",
                        url: "https://wa.me/",
                        icon: (
                          <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                          </svg>
                        )
                      },
                      {
                        name: "Email",
                        url: "mailto:kasim@example.com",
                        icon: (
                          <Mail className="w-6 h-6 stroke-black text-black stroke-[2]" />
                        )
                      }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                        rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        aria-label={social.name}
                        className="text-black hover:opacity-60 transition-all duration-200 hover:scale-115 active:scale-95 flex items-center justify-center p-0.5 cursor-pointer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Note */}
                <div className="flex items-center justify-between text-[10px] text-neutral-400 font-medium pt-1">
                  <span>© 2026 Kasim</span>
                  <span className="uppercase tracking-wider">Available for work</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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

      {/* Bottom Content */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full z-30 relative pointer-events-none">
        
        {/* MOBILE VIEW (< md) - Icons vertically aligned on left corner above description, description centered */}
        <div className="flex md:hidden flex-col items-center w-full relative gap-4 sm:gap-5">
          {/* Vertical Social Icons on Left Side above description with Startup Wave Rise Animation */}
          <div className="absolute left-0 bottom-full mb-10 sm:mb-14 flex flex-col items-start gap-3.5 pointer-events-auto">
            {socialLinks.map((social, idx) => (
              <motion.div 
                key={social.name} 
                custom={idx}
                variants={iconWaveVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group/social flex items-center"
              >
                {/* Tooltip on the Right of Icon for Mobile */}
                <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 opacity-0 group-hover/social:opacity-100 -translate-x-1 group-hover/social:translate-x-0 transition-all duration-200 pointer-events-none z-50 flex items-center">
                  <div className="relative px-2.5 py-1 rounded-md bg-[#141414]/95 text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.7)] backdrop-blur-md whitespace-nowrap">
                    {social.name}
                    {/* Tooltip triangle pointer pointing left to icon */}
                    <div className="absolute top-1/2 -left-[4px] -translate-y-1/2 w-2 h-2 bg-[#141414] border-b border-l border-white/20 rotate-45" />
                  </div>
                </div>

                {/* Social Icon Link */}
                <a
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={social.name}
                  className="text-[#D7E2EA]/80 hover:text-white transition-all duration-200 hover:scale-120 active:scale-95 flex items-center justify-center p-1 cursor-pointer"
                >
                  {social.icon}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Centered Description Text */}
          <div className="pointer-events-auto text-center w-full max-w-[92vw]">
            <p 
              className="text-[#D7E2EA] font-semibold uppercase tracking-wide leading-snug"
              style={{ 
                fontSize: 'clamp(0.85rem, 3.5vw, 1.05rem)',
                textShadow: '0px 2px 8px rgba(0, 0, 0, 0.9)'
              }}
            >
              <TypingText 
                text="A full stack developer driven by building modern, high-performing, and visually engaging web experiences."
                delay={0.65}
              />
            </p>
          </div>

          {/* Centered CTA Button on Mobile */}
          <div className="pointer-events-auto w-full flex justify-center pt-0.5">
            <ContactButton href="#services" className="w-full max-w-[90vw]">
              Explore My Work
            </ContactButton>
          </div>
        </div>

        {/* DESKTOP VIEW (>= md) - Left: description + horizontal icons, Right: CTA button */}
        <div className="hidden md:flex md:flex-row justify-between items-end w-full">
          {/* Left Side: Description Text + 4 Social Icons Below */}
          <div className="pointer-events-auto text-left max-w-[320px] flex flex-col items-start">
            <p 
              className="text-[#D7E2EA] font-semibold uppercase tracking-wide leading-snug mb-3.5"
              style={{ 
                fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                textShadow: '0px 2px 8px rgba(0, 0, 0, 0.9)'
              }}
            >
              <TypingText 
                text="A full stack developer driven by building modern, high-performing, and visually engaging web experiences."
                delay={0.65}
              />
            </p>

            {/* 4 Social Icons Row with Startup Wave Rise Animation and Upward Tooltips */}
            <div className="flex items-center gap-4 pt-0.5">
              {socialLinks.map((social, idx) => (
                <motion.div 
                  key={social.name} 
                  custom={idx}
                  variants={iconWaveVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group/social flex items-center justify-center"
                >
                  {/* Tooltip Above Icon */}
                  <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover/social:opacity-100 translate-y-1 group-hover/social:translate-y-0 transition-all duration-200 pointer-events-none z-50 flex flex-col items-center">
                    <div className="relative px-2.5 py-1 rounded-md bg-[#141414]/95 text-white text-[11px] font-semibold uppercase tracking-wider border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.7)] backdrop-blur-md whitespace-nowrap">
                      {social.name}
                      <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#141414] border-b border-r border-white/20 rotate-45" />
                    </div>
                  </div>

                  {/* Social Icon Link */}
                  <a
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={social.name}
                    className="text-[#D7E2EA]/80 hover:text-white transition-all duration-200 hover:scale-120 active:scale-95 flex items-center justify-center p-1 cursor-pointer"
                  >
                    {social.icon}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Explore My Work CTA */}
          <FadeIn delay={1.2} y={20} className="pointer-events-auto flex justify-end">
            <ContactButton href="#services">
              Explore My Work
            </ContactButton>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};



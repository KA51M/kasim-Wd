import { FadeIn } from '../FadeIn';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const servicesList: ServiceItem[] = [
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="7 8 3 12 7 16" />
        <polyline points="17 8 21 12 17 16" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: "FULL STACK DEVELOPMENT",
    description: "Building fast, scalable, and responsive web applications with modern frontend and backend technologies."
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
    title: "UI/UX WEB DESIGN",
    description: "Designing clean, modern, and conversion-focused interfaces with smooth user experiences and responsive layouts."
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 6 13.5 14.5 8.5 9.5 2 16" />
        <polyline points="16 6 22 6 22 12" />
        <rect x="2" y="16" width="3" height="5" rx="0.5" />
        <rect x="7.5" y="13" width="3" height="8" rx="0.5" />
        <rect x="13" y="10" width="3" height="11" rx="0.5" />
      </svg>
    ),
    title: "SEO & PERFORMANCE OPTIMIZATION",
    description: "Optimizing websites for faster loading, better search rankings, smooth animations, and improved overall performance."
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "BUSINESS WEBSITE SOLUTIONS",
    description: "Creating professional websites for clinics, restaurants, brands, and local businesses with booking and modern features."
  }
];

export const ProjectsSection = () => {
  return (
    <section 
      id="services" 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 w-full"
    >
      {/* Simple Clean Heading (No ornaments, no description below) */}
      <FadeIn delay={0.1} y={40} className="w-full mb-12 sm:mb-16 md:mb-20 text-center">
        <h2 
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Services Table Frame Box */}
      <FadeIn delay={0.2} y={40} className="w-full max-w-5xl mx-auto">
        <div className="w-full rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-[#0C0C0C] overflow-hidden divide-y divide-neutral-800/90 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {servicesList.map((service) => (
            <div 
              key={service.title}
              className="group flex flex-row items-stretch w-full transition-colors duration-300 hover:bg-white/[0.04] cursor-pointer"
            >
              {/* Left Column: Icon */}
              <div className="w-20 sm:w-28 md:w-36 flex items-center justify-center border-r border-neutral-800/90 shrink-0 p-4 sm:p-6 text-white group-hover:text-white transition-colors">
                {service.icon}
              </div>

              {/* Middle Column: Title & Description */}
              <div className="flex-1 py-6 sm:py-8 md:py-9 px-6 sm:px-9 md:px-12 flex flex-col justify-center">
                <h3 className="font-bold uppercase text-white tracking-wide text-sm sm:text-base md:text-lg lg:text-xl">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm md:text-[15px] leading-relaxed mt-1.5 sm:mt-2 font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

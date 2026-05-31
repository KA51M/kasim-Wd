
import { FadeIn } from '../FadeIn';

const services = [
  {
    num: "01",
    title: "FULL STACK DEVELOPMENT",
    desc: "Building fast, scalable, and responsive web applications with modern frontend and backend technologies tailored for businesses and startups."
  },
  {
    num: "02",
    title: "UI/UX WEB DESIGN",
    desc: "Designing clean, modern, and conversion-focused interfaces with smooth user experiences, strong typography, and responsive layouts."
  },
  {
    num: "03",
    title: "SEO & PERFORMANCE OPTIMIZATION",
    desc: "Optimizing websites for faster loading, better search rankings, smooth animations, and improved overall performance across all devices."
  },
  {
    num: "04",
    title: "BUSINESS WEBSITE SOLUTIONS",
    desc: "Creating professional websites for clinics, laboratories, restaurants, brands, and local businesses with booking, WhatsApp integration, and modern branding."
  }
];

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10">
      <h2 
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn 
            key={service.num} 
            delay={i * 0.1}
            className="flex flex-col md:flex-row md:items-start border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 w-full"
          >
            <div 
              className="text-[#0C0C0C] font-black leading-none md:w-1/3 mb-4 md:mb-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </div>
            
            <div className="md:w-2/3 flex flex-col justify-center h-full pt-2 md:pt-4">
              <h3 
                className="text-[#0C0C0C] font-medium uppercase mb-3 md:mb-4"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
        {/* Add bottom border to last item */}
        <div className="border-t border-[rgba(12,12,12,0.15)] w-full"></div>
      </div>
    </section>
  );
};

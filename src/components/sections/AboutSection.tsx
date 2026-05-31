
import { FadeIn } from '../FadeIn';
import { AnimatedText } from '../AnimatedText';
import { ContactButton } from '../ContactButton';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden w-full">
      
      {/* Top Left - React */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0 opacity-80">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-full h-auto drop-shadow-[0_0_30px_rgba(97,218,251,0.4)]" />
      </FadeIn>
      
      {/* Bottom Left - JS */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-0 opacity-80">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" className="w-full h-auto drop-shadow-[0_0_30px_rgba(247,223,30,0.4)]" />
      </FadeIn>

      {/* Top Right - TS */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0 opacity-80">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="w-full h-auto drop-shadow-[0_0_30px_rgba(49,120,198,0.4)]" />
      </FadeIn>

      {/* Bottom Right - HTML/CSS */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-0 opacity-80">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="w-full h-auto drop-shadow-[0_0_30px_rgba(227,79,38,0.4)]" />
      </FadeIn>

      <div className="flex flex-col items-center relative z-10 w-full max-w-4xl mx-auto text-center">
        <FadeIn delay={0} y={40} className="w-full mb-10 sm:mb-14 md:mb-16">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>
        
        <div className="text-[#D7E2EA] font-medium leading-relaxed max-w-[660px] mx-auto mb-16 sm:mb-20 md:mb-24 flex justify-center text-center">
          <AnimatedText 
            text="I create modern web experiences that combine clean design, smooth performance, and scalable development to help businesses stand out online." 
            className="justify-center"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

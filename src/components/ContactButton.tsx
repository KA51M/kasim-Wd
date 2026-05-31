

export const ContactButton = ({ className = "" }: { className?: string }) => {
  return (
    <button 
      className={`rounded-full text-white font-medium uppercase tracking-widest px-8 py-4 sm:px-10 sm:py-4.5 md:px-12 md:py-5 text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(168,85,247,0.75)] cursor-pointer ${className}`}
      style={{
        background: '#0C0C0C',
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(135deg, #4f46e5 0%, #a855f7 50%, #ec4899 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        boxShadow: '0 0 15px rgba(168, 85, 247, 0.4), inset 0 0 10px rgba(168, 85, 247, 0.2)',
      }}
    >
      Contact Me
    </button>
  );
};




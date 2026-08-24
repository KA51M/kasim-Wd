

export const ContactButton = ({ 
  children = "Contact Me", 
  className = "",
  href
}: { 
  children?: React.ReactNode; 
  className?: string;
  href?: string;
}) => {
  const styles = {
    background: '#0C0C0C',
    border: '2px solid transparent',
    backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(135deg, #4f46e5 0%, #a855f7 50%, #ec4899 100%)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    boxShadow: '0 0 15px rgba(168, 85, 247, 0.4), inset 0 0 10px rgba(168, 85, 247, 0.2)',
  };

  const classes = `inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 md:px-11 md:py-4.5 text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(168,85,247,0.75)] cursor-pointer select-none ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
      }
    }
  };

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={classes} style={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} style={styles}>
      {children}
    </button>
  );
};




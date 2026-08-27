import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, X, Bot } from 'lucide-react';

interface KairoChatbotProps {
  className?: string;
  popupPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const KairoChatbot = ({ className = "", popupPosition = 'top-right' }: KairoChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Position classes for the chat popup window
  const getPopupPositionClass = () => {
    switch (popupPosition) {
      case 'top-left':
        return 'bottom-full mb-3 left-0 origin-bottom-left';
      case 'bottom-right':
        return 'top-full mt-3 right-0 origin-top-right';
      case 'bottom-left':
        return 'top-full mt-3 left-0 origin-top-left';
      case 'top-right':
      default:
        return 'bottom-full mb-3 right-0 origin-bottom-right';
    }
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Kairo Chatbot Trigger Logo Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Kairo AI Chatbot"
        className="relative group cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 select-none focus:outline-none"
      >
        {/* Main Stadium / Pill Outline Container */}
        <div className="relative flex items-center justify-center px-4 py-1 sm:px-5 sm:py-1.5 rounded-full border border-white/80 bg-black/40 backdrop-blur-xs min-w-[85px] sm:min-w-[95px]">
          {/* Blue "Ask..." Badge at Top-Left (Overlapping top border) */}
          <span className="absolute -top-[8px] left-2 bg-[#1A62FF] text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-[1px] rounded-full shadow-[0_2px_8px_rgba(26,98,255,0.6)] border border-blue-400/40 tracking-tight leading-none z-20 pointer-events-none flex items-center justify-center">
            Ask...
          </span>

          {/* 4-Pointed Outlined Sparkle Star at Top-Right (Matching reference image) */}
          <svg 
            className="absolute -top-[7px] -right-[7px] w-4 h-4 sm:w-4.5 sm:h-4.5 text-white fill-[#0C0C0C] stroke-white stroke-[2.2] drop-shadow-[0_0_4px_rgba(255,255,255,0.7)] z-20 pointer-events-none" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2 C12 7.5 16.5 12 22 12 C16.5 12 12 16.5 12 22 C12 16.5 7.5 12 2 12 C7.5 12 12 7.5 12 2 Z" />
          </svg>

          {/* "kairo" Text */}
          <span className="text-white text-sm sm:text-base font-light tracking-wide lowercase font-sans leading-none pt-[1px] pb-[1px]">
            kairo
          </span>
        </div>
      </button>

      {/* Chat Window Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${getPopupPositionClass()} z-50 w-[240px] sm:w-[260px] bg-[#121212]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] overflow-hidden text-white pointer-events-auto`}
          >
            {/* Chat Window Header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1A62FF] flex items-center justify-center shadow-[0_0_8px_rgba(26,98,255,0.6)]">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Kairo AI</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Chat Window Body: Bug icon & "Build in progress" message */}
            <div className="p-4 flex flex-col items-center justify-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Bug className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-xs font-semibold text-white tracking-wide">
                  Build in progress
                </span>
                <span className="text-[10px] text-neutral-400 leading-tight">
                  Kairo chatbot is currently under active development.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

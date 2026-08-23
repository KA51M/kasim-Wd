import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
  autoPlayInterval?: number;
  initialDelay?: number;
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.35, ease: 'easeOut' },
      scale: { duration: 0.35, ease: 'easeOut' }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: 'spring' as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.3, ease: 'easeIn' },
      scale: { duration: 0.3, ease: 'easeIn' }
    }
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ProjectImageCarousel = ({
  images,
  title,
  className = '',
  autoPlayInterval = 3500,
  initialDelay = 1500
}: ProjectImageCarouselProps) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Safe wrap-around index calculation for infinite queue
  const currentIndex = ((page % images.length) + images.length) % images.length;

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    const diff = targetIndex - currentIndex;
    const dir = diff > 0 ? 1 : -1;
    setPage(([prevPage]) => [prevPage + diff, dir]);
  };

  // Continuous auto-play timer with staggered initial delay and pause on hover
  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
      paginate(1);
      intervalId = setInterval(() => {
        paginate(1);
      }, autoPlayInterval);
      timerRef.current = intervalId;
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paginate, isHovered, autoPlayInterval, initialDelay, images.length]);

  return (
    <div
      className={`relative overflow-hidden bg-neutral-950 select-none group/carousel ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top-Centered Pagination Dots Overlaid Directly on Image */}
      {images.length > 1 && (
        <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          {images.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className="relative p-0.5 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-125 focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-3.5 sm:w-4 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                      : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Infinite Carousel Slide Animation */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <img
              src={images[currentIndex]}
              alt={`${title} - Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle top and bottom dark gradient overlay for depth and dot visibility */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />
    </div>
  );
};

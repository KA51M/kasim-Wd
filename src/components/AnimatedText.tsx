import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Character = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute top-0 left-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = "", style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });
  
  const words = text.split(" ");
  const totalChars = text.replace(/\s+/g, '').length;
  let charIndex = 0;

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const wordChars = word.split('');
        return (
          <span key={i} className="mr-[0.3em] flex">
            {wordChars.map((char, j) => {
              const start = charIndex / totalChars;
              const end = start + (1 / totalChars);
              charIndex++;
              return (
                <Character 
                  key={j} 
                  char={char} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};


import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'scale' | 'bounce';
}

const AnimatedContainer = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.3,
  type = 'fade'
}: AnimatedContainerProps) => {
  const variants: Variants = {
    hidden: type === 'fade' 
      ? { opacity: 0 }
      : type === 'slide'
      ? { opacity: 0, y: 20 }
      : type === 'scale'
      ? { opacity: 0, scale: 0.95 }
      : { opacity: 0, scale: 0.8 },
    visible: type === 'fade'
      ? { opacity: 1 }
      : type === 'slide'
      ? { opacity: 1, y: 0 }
      : type === 'scale'
      ? { opacity: 1, scale: 1 }
      : { 
          opacity: 1, 
          scale: 1,
          transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 20
          }
        }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;

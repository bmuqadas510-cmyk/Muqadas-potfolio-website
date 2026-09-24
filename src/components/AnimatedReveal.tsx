import React from 'react';
import { motion } from 'motion/react';

interface AnimatedRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'blur-in';
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.85,
  className = '',
  viewportMargin = '-60px',
}) => {
  const getVariants = () => {
    switch (animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 36, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
        };
      case 'scale-in':
        return {
          hidden: { opacity: 0, scale: 0.94, filter: 'blur(6px)' },
          visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        };
      case 'blur-in':
        return {
          hidden: { opacity: 0, filter: 'blur(12px)' },
          visible: { opacity: 1, filter: 'blur(0px)' },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

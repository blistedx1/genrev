import React from 'react';
import { motion } from 'motion/react';

/**
 * AnimatedReveal Component
 * High-end architectural scroll-triggered reveal wrapper:
 * - Directional reveal (fade + subtle slide-up/down)
 * - Custom luxury ease curve [0.16, 1, 0.3, 1]
 * - Lightweight threshold triggers with once: true
 */
export default function AnimatedReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 28,
  className = '',
  threshold = 0.12,
  once = true,
  scale = false
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial = {
    opacity: 0,
    ...(scale ? { scale: 0.98 } : {}),
    ...directions[direction]
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once, amount: threshold, margin: '-30px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

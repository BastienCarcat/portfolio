export const EASING = [0.22, 1, 0.36, 1] as const;

export const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASING,
    },
  },
} as const;

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
} as const;

export const layoutTransition = {
  layout: {
    duration: 0.5,
    ease: EASING,
  },
} as const;
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideIn = (direction = 'left') => ({
  initial: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
});
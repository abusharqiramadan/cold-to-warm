import type { MotionProps, Variants } from "framer-motion"

/**
 * Shared easing curve chosen for a smooth-yet-snappy feel that still reads well at 0.5s.
 */
export const DEFAULT_EASE: [number, number, number, number] = [0.16, 0.84, 0.44, 1]

/**
 * Viewport settings ensure animations only fire once elements are scrolled into view,
 * keeping work offscreen idle for better performance.
 */
export const DEFAULT_VIEWPORT: MotionProps["viewport"] = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -120px 0px",
}

/**
 * Container variant factory enabling global control over stagger timing while respecting
 * the user's reduced-motion preference.
 */
export const createStaggerContainer = (reduceMotion?: boolean): Variants => {
  const transition = reduceMotion
    ? { staggerChildren: 0, delayChildren: 0 }
    : { staggerChildren: 0.12, delayChildren: 0.08 }

  const exitTransition = reduceMotion
    ? { staggerChildren: 0 }
    : { staggerChildren: 0.08, staggerDirection: -1 }

  return {
    hidden: {},
    show: {
      transition,
    },
    exit: {
      transition: exitTransition,
    },
  }
}

/**
 * Item variant factory focused on transform + opacity animations for GPU-friendly updates
 * and reduced-motion fallbacks.
 */
export const createStaggerItem = (reduceMotion?: boolean): Variants => {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 0.3, ease: DEFAULT_EASE },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: DEFAULT_EASE },
      },
    }
  }

  return {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: DEFAULT_EASE,
      },
    },
    exit: {
      opacity: 0,
      y: 16,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }
}

/**
 * Section variants let whole blocks fade in with optional vertical offset while
 * respecting motion reduction preferences.
 */
export const createSectionVariants = (reduceMotion?: boolean): Variants => {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 0.35,
          ease: DEFAULT_EASE,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.25,
          ease: DEFAULT_EASE,
        },
      },
    }
  }

  return {
    hidden: {
      opacity: 0,
      y: 32,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: DEFAULT_EASE,
      },
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: {
        duration: 0.35,
        ease: DEFAULT_EASE,
      },
    },
  }
}

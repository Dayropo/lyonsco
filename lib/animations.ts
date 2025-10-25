/**
 * GSAP animation helpers and utilities
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Fade in animation with optional slide
 */
export const fadeIn = (
  element: gsap.TweenTarget,
  options?: {
    duration?: number
    delay?: number
    y?: number
    x?: number
    stagger?: number
  },
): gsap.core.Tween => {
  return gsap.from(element, {
    opacity: 0,
    y: options?.y ?? 20,
    x: options?.x ?? 0,
    duration: options?.duration ?? 0.8,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? 0,
    ease: 'power2.out',
  })
}

/**
 * Fade in with scroll trigger
 */
export const fadeInScroll = (
  element: gsap.TweenTarget,
  options?: {
    duration?: number
    y?: number
    x?: number
    stagger?: number
    start?: string
    end?: string
    scrub?: boolean
  },
): gsap.core.Tween => {
  return gsap.from(element, {
    opacity: 0,
    y: options?.y ?? 40,
    x: options?.x ?? 0,
    duration: options?.duration ?? 1,
    stagger: options?.stagger ?? 0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: options?.start ?? 'top 80%',
      end: options?.end ?? 'bottom 20%',
      scrub: options?.scrub ?? false,
      toggleActions: 'play none none reverse',
    },
  })
}

/**
 * Scale animation
 */
export const scaleIn = (
  element: gsap.TweenTarget,
  options?: {
    duration?: number
    delay?: number
    scale?: number
    stagger?: number
  },
): gsap.core.Tween => {
  return gsap.from(element, {
    scale: options?.scale ?? 0.8,
    opacity: 0,
    duration: options?.duration ?? 0.6,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? 0,
    ease: 'back.out(1.7)',
  })
}

/**
 * Slide in from direction
 */
export const slideIn = (
  element: gsap.TweenTarget,
  direction: 'left' | 'right' | 'top' | 'bottom',
  options?: {
    duration?: number
    delay?: number
    distance?: number
    stagger?: number
  },
): gsap.core.Tween => {
  const distance = options?.distance ?? 100
  const props: Record<string, number> = {
    opacity: 0,
    duration: options?.duration ?? 0.8,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? 0,
  }
  switch (direction) {
    case 'left':
      props.x = -distance
      break
    case 'right':
      props.x = distance
      break
    case 'top':
      props.y = -distance
      break
    case 'bottom':
      props.y = distance
      break
  }
  return gsap.from(element, {
    ...props,
    ease: 'power3.out',
  })
}

/**
 * Parallax effect
 */
export const parallax = (
  element: gsap.TweenTarget,
  options?: {
    speed?: number
    start?: string
    end?: string
  },
): gsap.core.Tween => {
  return gsap.to(element, {
    y: (i, target) => {
      const speed = options?.speed ?? 0.5
      return -ScrollTrigger.maxScroll(window) * speed
    },
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: options?.start ?? 'top bottom',
      end: options?.end ?? 'bottom top',
      scrub: true,
      invalidateOnRefresh: true,
    },
  })
}

/**
 * Stagger reveal animation
 */
export const staggerReveal = (
  elements: gsap.TweenTarget,
  options?: {
    duration?: number
    stagger?: number
    y?: number
  },
): gsap.core.Timeline => {
  const tl = gsap.timeline()
  tl.from(elements, {
    opacity: 0,
    y: options?.y ?? 30,
    duration: options?.duration ?? 0.6,
    stagger: options?.stagger ?? 0.1,
    ease: 'power2.out',
  })
  return tl
}

/**
 * Counter animation
 */
export const animateCounter = (
  element: HTMLElement,
  endValue: number,
  options?: {
    duration?: number
    decimals?: number
    prefix?: string
    suffix?: string
  },
): gsap.core.Tween => {
  const obj = { value: 0 }
  return gsap.to(obj, {
    value: endValue,
    duration: options?.duration ?? 2,
    ease: 'power1.out',
    onUpdate: () => {
      const value = obj.value.toFixed(options?.decimals ?? 0)
      element.textContent = `${options?.prefix ?? ''}${value}${options?.suffix ?? ''}`
    },
  })
}

/**
 * Timeline section animation
 */
export const timelineAnimation = (
  container: gsap.TweenTarget,
  items: gsap.TweenTarget,
): gsap.core.Timeline => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
    },
  })
  tl.from(items, {
    opacity: 0,
    scale: 0.8,
    y: 50,
    stagger: 0.2,
    ease: 'power2.out',
  })
  return tl
}

/**
 * Card hover animation
 */
export const cardHover = (element: HTMLElement): void => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
}

/**
 * Page transition
 */
export const pageTransition = (): gsap.core.Timeline => {
  const tl = gsap.timeline()
  tl.to('.page-transition', {
    scaleY: 1,
    duration: 0.4,
    ease: 'power4.inOut',
    transformOrigin: 'bottom',
  })
  tl.to('.page-transition', {
    scaleY: 0,
    duration: 0.4,
    ease: 'power4.inOut',
    transformOrigin: 'top',
  })
  return tl
}

/**
 * Smooth scroll to element
 */
export const scrollToElement = (target: string | HTMLElement, offset: number = 0): void => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: offset,
    },
    ease: 'power2.inOut',
  })
}

/**
 * Initialize scroll triggers
 */
export const initScrollTriggers = (): void => {
  ScrollTrigger.refresh()
}

/**
 * Kill all scroll triggers
 */
export const killScrollTriggers = (): void => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

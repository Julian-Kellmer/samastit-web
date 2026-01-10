'use client'

import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './style.module.scss'

export default function Curve() {
  const [windowHeight, setWindowHeight] = useState<number>(0)

  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : useEffect

  useIsomorphicLayoutEffect(() => {
    // Set initial height
    setWindowHeight(window.innerHeight)

    // Resize listener
    const resize = () => {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // Avoid rendering if 0 to prevent flash/errors
  if (windowHeight === 0) return null

  const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${
    windowHeight / 2
  } 100 0`
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${
    windowHeight / 2
  } 100 0`

  const curve: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial='initial'
        animate='enter'
        exit='exit'></motion.path>
    </svg>
  )
}

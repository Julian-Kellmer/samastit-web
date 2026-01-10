'use client'

import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import Nav from '../Nav/Nav'
import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={styles.header}>
        {/* Logo Left */}
        <Link
          href='/'
          className={styles.logo}>
          <Image
            src='/logo.svg'
            alt='Logo'
            fill
            className='object-contain object-left'
            priority
          />
        </Link>

        {/* Hamburger Right */}
        <button
          onClick={() => setIsActive(!isActive)}
          className={`${styles.button} ${isActive ? styles.isActive : ''}`}
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          aria-expanded={isActive}>
          <div className={styles.burger}></div>
        </button>
      </motion.div>

      <AnimatePresence mode='wait'>
        {isActive && <Nav onClose={() => setIsActive(false)} />}
      </AnimatePresence>
    </>
  )
}

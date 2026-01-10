'use client'

import React, { useEffect } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { menuSlide, slide } from '../anim'
import Link from 'next/link'
import Curve from '../Curve/Curve'

interface NavProps {
  onClose: () => void
}

const navItems = [
  {
    title: 'Experiencia meliquina',
    href: '/meliquina',
  },
  {
    title: 'Videos de ashtanga',
    href: '/#ashtanga',
  },
  {
    title: 'Joyas energeticas',
    href: '/joyas',
  },
  {
    title: 'Metodo samasthit',
    href: '/samastit',
  },
]

export default function Nav({ onClose }: NavProps) {
  // Disable Body Scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
      role='dialog'
      aria-modal='true'>
      <div className={styles.body}>
        
        {navItems.map((data, index) => {
          return (
            <motion.div
              key={index}
              custom={index}
              variants={slide}
              initial='initial'
              animate='enter'
              exit='exit'>
              <Link
                href={data.href}
                onClick={onClose}>
                {data.title}
              </Link>
            </motion.div>
          )
        })}
      </div>

      <div className={styles.footer}>
        <a href='#'>Instagram</a>
        <a href='#'>Contact</a>
      </div>

      <Curve />
    </motion.div>
  )
}

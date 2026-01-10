'use client'

import styles from './style.module.scss'

type FxButtonBaseProps = {
  children: React.ReactNode
  className?: string
}

export function FxButtonBase({
  children,
  className
}: FxButtonBaseProps) {
  return (
    <span className={`${styles.btn} ${className ?? ''}`}>
      <span className={styles.label}>{children}</span>
      <span className={styles.shine} aria-hidden />
      <span className={styles.glow} aria-hidden />
    </span>
  )
}





// 'use client'

// import styles from './style.module.scss'

// type FxButtonProps = {
//   children: React.ReactNode
//   onClick?: () => void
//   href?: string
// }

// export default function FxButton({ children, onClick, href }: FxButtonProps) {
//   const Comp: React.ElementType = href ? 'a' : 'button'

//   return (
//     <Comp
//       className={styles.btn}
//       onClick={onClick}
//       href={href}
//       {...(href ? { role: 'button' } : { type: 'button' })}>
//       <span className={styles.label}>{children}</span>
//       <span
//         className={styles.shine}
//         aria-hidden
//       />
//       <span
//         className={styles.glow}
//         aria-hidden
//       />
//     </Comp>
//   )
// }

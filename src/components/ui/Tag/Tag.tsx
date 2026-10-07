import type { ReactNode } from 'react'
import styles from './Tag.module.css'

type TagProps = {
  variant?: 'filled' | 'outline' | 'acid'
  children: ReactNode
}

export function Tag({ variant = 'filled', children }: TagProps) {
  return <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>
}

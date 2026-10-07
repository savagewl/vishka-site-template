import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  id: string
  title: string
  aside?: ReactNode
  tone?: 'ink' | 'paper'
  align?: 'center' | 'end'
  asideAlign?: 'left' | 'right'
}

export function SectionHeader({
  id,
  title,
  aside,
  tone = 'ink',
  align = 'center',
  asideAlign = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${styles[`align-${align}`]}`}>
      <h2 id={id} className={`${styles.title} ${styles[tone]}`}>{title}</h2>
      {aside && <p className={`${styles.aside} ${styles[`aside-${asideAlign}`]}`}>{aside}</p>}
    </div>
  )
}

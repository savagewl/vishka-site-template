import { useEffect, useId, useRef, type ReactNode } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
  onClose: () => void
  eyebrow?: string
  title: ReactNode
  children: ReactNode
}

/**
 * Попап на нативном <dialog>: открывается при монтировании, фокус остаётся
 * внутри, закрывается по Esc, крестику и клику по фону. Пока открыт —
 * страница под ним не скроллится (Lenis с autoToggle останавливается сам,
 * когда у html overflow: hidden).
 */
export function Modal({ onClose, eyebrow, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()

    document.documentElement.classList.add('is-locked')
    return () => document.documentElement.classList.remove('is-locked')
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      data-lenis-prevent
    >
      <div className={styles.panel}>
        <header className={styles.head}>
          <div>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
          </div>
          <button className={styles.close} type="button" onClick={onClose} aria-label="Закрыть">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M1 1l12 12M13 1 1 13" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </button>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </dialog>
  )
}

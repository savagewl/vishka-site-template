import styles from './Form.module.css'

type StubSuccessProps = {
  title: string
  text: string
  onClose: () => void
}

export function StubSuccess({ title, text, onClose }: StubSuccessProps) {
  return (
    <div className={styles.success} role="status">
      <span className={styles.successMark} aria-hidden="true">
        [ ✓ ]
      </span>
      <h3 className={styles.successTitle}>{title}</h3>
      <p className={styles.note}>{text}</p>
      <p className={styles.stub}>Это демо-форма: данные никуда не отправляются.</p>
      <button className={styles.submit} type="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  )
}

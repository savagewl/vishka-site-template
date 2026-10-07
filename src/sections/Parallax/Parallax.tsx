import { useScrollProgress } from '../../hooks/useScrollProgress'
import photo from '../../assets/images/parallax-type-case.webp'
import styles from './Parallax.module.css'

/**
 * Параллакс слоями (по мотивам Osmo «Parallax Image Layers»): чем дальше
 * слой, тем сильнее он отстаёт от прокрутки. Скорость слоя — --speed,
 * общий прогресс --p ставит useScrollProgress.
 */
export function Parallax() {
  const ref = useScrollProgress<HTMLElement>({ from: 'screen' })

  return (
    <section ref={ref} className={styles.parallax} aria-labelledby="parallax-title">
      <img className={`${styles.layer} ${styles.photo}`} src={photo} alt="" aria-hidden="true" />
      <div className={`${styles.layer} ${styles.paper}`} aria-hidden="true" />
      <div className={`${styles.layer} ${styles.titleLayer}`}>
        <p className={styles.caption}>[ Печать · Оттиск · Крик ]</p>
        <h2 id="parallax-title" className={styles.title}>
          Типографский <br />
          бунт
        </h2>
      </div>
      <div className={`${styles.layer} ${styles.ground}`} aria-hidden="true" />
    </section>
  )
}

import { useScrollProgress } from '../../hooks/useScrollProgress'
import building from '../../assets/images/hero-building.webp'
import polygons from '../../assets/shapes/hero-polygons.svg'
import tornEdge from '../../assets/shapes/edge-hero.svg'
import styles from './Hero.module.css'

const stats = [
  { label: 'Фестивальные секции', value: '3 дня · 4 лектория' },
  { label: 'Практические зоны', value: '20+ мастер-классов' },
  { label: 'Экспозиция', value: '500+ печатных зинов' },
]

export function Hero() {
  const heroRef = useScrollProgress<HTMLElement>({ from: 'top' })

  return (
    <section ref={heroRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <img className={styles.polygons} src={polygons} alt="" aria-hidden="true" />
        <p className={styles.word} aria-hidden="true">
          Вышка
        </p>
        <img className={styles.building} src={building} alt="" aria-hidden="true" />
        <div className={`${styles.building} ${styles.tint}`} aria-hidden="true" />
        <h1 id="hero-title" className={styles.title}>
          <span className="visually-hidden">Вышка. </span>
          Архитектура символа <br />в эпоху цифрового шума
        </h1>
        <img className={styles.edge} src={tornEdge} alt="" aria-hidden="true" />
      </div>

      <dl className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

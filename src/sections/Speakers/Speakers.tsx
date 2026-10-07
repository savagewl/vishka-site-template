import { headliner, speakers } from '../../data/speakers'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { Tag } from '../../components/ui/Tag/Tag'
import styles from './Speakers.module.css'

export function Speakers() {
  return (
    <section id="speakers" className={styles.speakers} aria-labelledby="speakers-title">
      <div className={styles.inner}>
        <div className={styles.top}>
          <SectionHeader id="speakers-title" title="Спикеры и мастера" tone="paper" />

          <article className={`${styles.card} ${styles.headliner}`}>
            <img className={styles.photo} src={headliner.photo} alt={headliner.name} loading="lazy" />
            <div className={styles.headlinerInfo}>
              <div>
                <Tag variant="acid">Хедлайнер</Tag>
                <h3 className={styles.headlinerName}>{headliner.name}</h3>
                <p className={styles.role}>{headliner.role}</p>
              </div>
              <div>
                <p className={styles.talk}>«{headliner.talk}»</p>
                <p className={styles.role}>{headliner.slot}</p>
              </div>
            </div>
          </article>
        </div>

        <ul className={styles.grid}>
          {speakers.map((speaker) => (
            <li key={speaker.name} className={styles.card}>
              <img className={styles.photo} src={speaker.photo} alt={speaker.name} loading="lazy" />
              <div>
                <h3 className={styles.name}>{speaker.name}</h3>
                <p className={styles.role}>{speaker.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.slant} aria-hidden="true" />
    </section>
  )
}

import { program } from '../../data/program'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { Tag } from '../../components/ui/Tag/Tag'
import manifestoEdge from '../../assets/shapes/edge-manifesto.svg'
import speakersEdge from '../../assets/shapes/edge-program.svg'
import styles from './Program.module.css'

export function Program() {
  return (
    <section id="program" className={styles.program} aria-labelledby="program-title">
      <img className={styles.edgeTop} src={manifestoEdge} alt="" aria-hidden="true" />

      <div className={styles.inner}>
        <SectionHeader
          id="program-title"
          title="Программа действий"
          aside="[ Лекции, печатные воркшопы и шрифтовые батлы. Выбирайте траекторию хаоса. ]"
        />

        <div className={styles.schedule}>
          {program.map((day) => (
            <div key={day.title} className={styles.day}>
              <h3 className={`${styles.dayTitle} ${styles[day.accent]}`}>{day.title}</h3>
              <ol className={styles.sessions}>
                {day.sessions.map((session) => (
                  <li key={session.time} className={styles.session}>
                    <time className={styles.time}>{session.time}</time>
                    <div className={styles.about}>
                      <h4 className={styles.sessionTitle}>{session.title}</h4>
                      <p className={styles.speaker}>
                        Спикер: <b>{session.speaker}</b>
                      </p>
                    </div>
                    <div className={styles.tags}>
                      <Tag variant="outline">{session.hall}</Tag>
                      <Tag>{session.format}</Tag>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <img className={styles.edgeBottom} src={speakersEdge} alt="" aria-hidden="true" />
    </section>
  )
}

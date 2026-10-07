import { event, mainNav } from '../../data/navigation'
import { usePopups } from '../../components/popups/PopupsContext'
import styles from './Header.module.css'

export function Header() {
  const { openRegistration } = usePopups()

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Основная навигация">
        <ul className={styles.links}>
          {mainNav.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className={styles.cta} type="button" onClick={openRegistration}>
          Регистрация
        </button>
      </nav>

      <div className={styles.ticker}>
        <span>
          [ {event.city} · {event.dates} ]
        </span>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.venue}>{event.venue}</span>
      </div>
    </header>
  )
}

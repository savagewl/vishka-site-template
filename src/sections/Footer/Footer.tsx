import { contacts, credits, footerNav } from '../../data/navigation'
import { usePopups } from '../../components/popups/PopupsContext'
import styles from './Footer.module.css'

export function Footer() {
  const { openRegistration } = usePopups()

  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          <span className={styles.ctaLineOne}>Готовы измазать</span>{' '}
          <span className={styles.ctaLineTwo}>руки краской?</span>
        </h2>
        <p className={styles.ctaNoteOne}>Регистрация закроется по достижении лимита участников в 400 человек.</p>
        <p className={styles.ctaNoteTwo}>Никакого добора на месте не будет.</p>
        <button className={styles.ctaButton} type="button" onClick={openRegistration}>
          Регистрация
        </button>
      </div>

      <div className={styles.links}>
        <nav aria-label="Навигация в подвале">
          <ul className={styles.row}>
            {footerNav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.row}>
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a href={contact.href}>{contact.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 ШУМ / TYPE RIOT. Все права зинов защищены.</p>
        <ul className={styles.credits}>
          {credits.map((credit) => (
            <li key={credit.href}>
              <a href={credit.href} target="_blank" rel="noopener noreferrer">
                {credit.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

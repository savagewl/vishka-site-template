import { tickets } from '../../data/tickets'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { Tag } from '../../components/ui/Tag/Tag'
import { CheckIcon } from '../../components/icons/CheckIcon'
import { usePopups } from '../../components/popups/PopupsContext'
import styles from './Tickets.module.css'

export function Tickets() {
  const { openTicket } = usePopups()

  return (
    <section id="tickets" className={styles.tickets} aria-labelledby="tickets-title">
      <SectionHeader
        id="tickets-title"
        title="Выберите уровень шума"
        aside="Количество мест на практические воркшопы строго ограничено из-за вместимости аналоговых мастерских."
        align="end"
        asideAlign="right"
      />

      <ul className={styles.list}>
        {tickets.map((ticket) => (
          <li key={ticket.name} className={`${styles.card} ${ticket.featured ? styles.featured : ''}`}>
            <div className={styles.body}>
              <div className={styles.summary}>
                <div className={styles.head}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.name}>{ticket.name}</h3>
                    {ticket.featured && <Tag variant="acid">Популярно</Tag>}
                  </div>
                  <p className={styles.description}>{ticket.description}</p>
                </div>
                <p className={styles.price}>{ticket.price}</p>
              </div>

              <ul className={styles.features}>
                {ticket.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className={styles.button} type="button" onClick={() => openTicket(ticket)}>
              Купить билет
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

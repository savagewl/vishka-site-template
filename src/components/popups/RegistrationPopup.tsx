import { useState, type FormEvent } from 'react'
import { event } from '../../data/navigation'
import { tickets } from '../../data/tickets'
import { Modal } from '../ui/Modal/Modal'
import { StubSuccess } from './StubSuccess'
import styles from './Form.module.css'

export function RegistrationPopup({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false)

  const submit = (formEvent: FormEvent) => {
    formEvent.preventDefault()
    setSent(true)
  }

  return (
    <Modal onClose={onClose} eyebrow={`[ ${event.city} · ${event.dates} ]`} title="Регистрация">
      {sent ? (
        <StubSuccess
          title="Заявка принята"
          text="Мы пришлём подтверждение и программу на почту за неделю до фестиваля."
          onClose={onClose}
        />
      ) : (
        <form className={styles.form} onSubmit={submit}>
          <p className={styles.note}>Регистрация закроется по достижении лимита участников в 400 человек.</p>

          <label className={styles.field}>
            <span className={styles.label}>Имя и фамилия</span>
            <input className={styles.input} name="name" autoComplete="name" required placeholder="Анна Шумова" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input className={styles.input} name="email" type="email" autoComplete="email" required placeholder="you@studio.co" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Telegram — необязательно</span>
            <input className={styles.input} name="telegram" placeholder="@username" />
          </label>

          <fieldset className={styles.field}>
            <legend className={styles.label}>Уровень шума</legend>
            <div className={styles.chips}>
              {tickets.map((ticket, index) => (
                <label key={ticket.name} className={styles.chip}>
                  <input type="radio" name="ticket" value={ticket.name} defaultChecked={index === 1} />
                  <span>{ticket.name}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className={styles.check}>
            <input type="checkbox" name="consent" required />
            <span>Согласен на обработку персональных данных</span>
          </label>

          <button className={styles.submit} type="submit">
            Зарегистрироваться
          </button>
        </form>
      )}
    </Modal>
  )
}

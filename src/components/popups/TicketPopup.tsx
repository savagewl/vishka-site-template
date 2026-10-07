import { useState, type FormEvent } from 'react'
import type { Ticket } from '../../data/tickets'
import { CheckIcon } from '../icons/CheckIcon'
import { Modal } from '../ui/Modal/Modal'
import { StubSuccess } from './StubSuccess'
import styles from './Form.module.css'

const MAX_QUANTITY = 10
const formatRub = (value: number) => `${value.toLocaleString('ru-RU')} ₽`

export function TicketPopup({ ticket, onClose }: { ticket: Ticket; onClose: () => void }) {
  const [quantity, setQuantity] = useState(1)
  const [paid, setPaid] = useState(false)
  const total = formatRub(ticket.amount * quantity)

  const submit = (formEvent: FormEvent) => {
    formEvent.preventDefault()
    setPaid(true)
  }

  return (
    <Modal onClose={onClose} eyebrow="[ Покупка билета ]" title={`Билет «${ticket.name}»`}>
      {paid ? (
        <StubSuccess
          title="Билет забронирован"
          text={`«${ticket.name}» × ${quantity} на сумму ${total}. Электронный билет придёт на почту.`}
          onClose={onClose}
        />
      ) : (
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.summary}>
            <div className={styles.summaryHead}>
              <span className={styles.summaryName}>{ticket.name}</span>
              <span className={styles.summaryPrice}>{formatRub(ticket.amount)}</span>
            </div>
            <ul className={styles.features}>
              {ticket.features.map((feature) => (
                <li key={feature}>
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.field}>
            <span className={styles.label} id="ticket-quantity">
              Количество
            </span>
            <div className={styles.stepper} role="group" aria-labelledby="ticket-quantity">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                disabled={quantity === 1}
                aria-label="Меньше"
              >
                −
              </button>
              <output aria-live="polite">{quantity}</output>
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.min(MAX_QUANTITY, value + 1))}
                disabled={quantity === MAX_QUANTITY}
                aria-label="Больше"
              >
                +
              </button>
            </div>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Имя на билете</span>
            <input className={styles.input} name="name" autoComplete="name" required placeholder="Анна Шумова" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email для билета</span>
            <input className={styles.input} name="email" type="email" autoComplete="email" required placeholder="you@studio.co" />
          </label>

          <div className={styles.total}>
            <span className={styles.label}>Итого</span>
            <span className={styles.totalValue}>{total}</span>
          </div>

          <button className={styles.submit} type="submit">
            Оплатить {total}
          </button>
          <p className={styles.stub}>Оплата — заглушка: деньги не списываются.</p>
        </form>
      )}
    </Modal>
  )
}

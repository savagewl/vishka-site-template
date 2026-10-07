import { useMemo, useState, type ReactNode } from 'react'
import type { Ticket } from '../../data/tickets'
import { PopupsContext, type Popups } from './PopupsContext'
import { RegistrationPopup } from './RegistrationPopup'
import { TicketPopup } from './TicketPopup'

type ActivePopup = { type: 'registration' } | { type: 'ticket'; ticket: Ticket } | null

/**
 * Попапы рендерятся здесь, в корне приложения, а не внутри секций:
 * так на них не влияет CSS zoom секций, и открыть их можно из любого места.
 */
export function PopupsProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ActivePopup>(null)
  const close = () => setActive(null)

  const popups = useMemo<Popups>(
    () => ({
      openRegistration: () => setActive({ type: 'registration' }),
      openTicket: (ticket) => setActive({ type: 'ticket', ticket }),
    }),
    [],
  )

  return (
    <PopupsContext.Provider value={popups}>
      {children}
      {active?.type === 'registration' && <RegistrationPopup onClose={close} />}
      {active?.type === 'ticket' && <TicketPopup ticket={active.ticket} onClose={close} />}
    </PopupsContext.Provider>
  )
}

import { createContext, useContext } from 'react'
import type { Ticket } from '../../data/tickets'

export type Popups = {
  openRegistration: () => void
  openTicket: (ticket: Ticket) => void
}

export const PopupsContext = createContext<Popups | null>(null)

export function usePopups() {
  const popups = useContext(PopupsContext)
  if (!popups) throw new Error('usePopups работает только внутри <PopupsProvider>')
  return popups
}

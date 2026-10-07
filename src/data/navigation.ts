export type NavLink = {
  label: string
  href: string
}

export const mainNav: NavLink[] = [
  { label: 'Манифест', href: '#manifesto' },
  { label: 'Программа', href: '#program' },
  { label: 'Спикеры', href: '#speakers' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Билеты', href: '#tickets' },
  { label: 'FAQ', href: '#faq' },
]

export const footerNav: NavLink[] = [
  { label: 'Манифест', href: '#manifesto' },
  { label: 'Программа', href: '#program' },
  { label: 'Спикеры', href: '#speakers' },
  { label: 'Билеты', href: '#tickets' },
]

export const contacts: NavLink[] = [
  { label: 'info@typeriot.ru', href: 'mailto:info@typeriot.ru' },
  { label: '+7 (495) 120-45-90', href: 'tel:+74951204590' },
  { label: 'Telegram: @typeriot_fest', href: 'https://t.me/typeriot_fest' },
]

export const credits: NavLink[] = [
  { label: 'Designed by Anna', href: 'https://t.me/qu_ne' },
  { label: 'Developed by savage', href: 'https://t.me/savagenolimit' },
]

export const event = {
  city: 'Москва',
  dates: '12–14 июня 2026',
  venue: 'Центр культуры «Хлебозавод №9»',
}

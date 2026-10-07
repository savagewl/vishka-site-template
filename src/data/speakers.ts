import kirill from '../assets/images/speakers/kirill-blagodatskikh.webp'
import maria from '../assets/images/speakers/maria-smirnova.webp'
import grigory from '../assets/images/speakers/grigory-bykov.webp'
import danila from '../assets/images/speakers/danila-kozlov.webp'
import alexandra from '../assets/images/speakers/alexandra-loginova.webp'

export type Speaker = {
  name: string
  role: string
  photo: string
}

export const headliner: Speaker & { talk: string; slot: string } = {
  name: 'Кирилл Благодатских',
  role: 'Арт-директор «Студии Зина»',
  photo: kirill,
  talk: 'Шрифт как оружие: история плакатной пропаганды',
  slot: '12 июня · 12:00 · Лектор_А',
}

export const speakers: Speaker[] = [
  { name: 'Мария Смирнова', role: 'Печатница, ЭШ', photo: maria },
  { name: 'Григорий Быков', role: 'Генеративный дизайнер', photo: grigory },
  { name: 'Данила Козлов', role: 'Наборщик, шрифтовик', photo: danila },
  { name: 'Александра Логинова', role: 'Книжный дизайнер', photo: alexandra },
]

export type ProgramSession = {
  time: string
  title: string
  speaker: string
  hall: string
  format: string
}

export type ProgramDay = {
  title: string
  accent: 'acid' | 'ink'
  sessions: ProgramSession[]
}

export const program: ProgramDay[] = [
  {
    title: 'День 01 — 12 июня: Теория и крик',
    accent: 'acid',
    sessions: [
      {
        time: '12:00 - 13:30',
        title: 'Шрифт как оружие: История плакатной пропаганды',
        speaker: 'Кирилл Благодатских (Студия Зина)',
        hall: 'Лектор_А',
        format: 'Лекция',
      },
      {
        time: '14:00 - 16:00',
        title: 'Аналоговый Рисограф: Практикум по печати многослойных плакатов',
        speaker: 'Мария Смирнова (ЭШ)',
        hall: 'Мастерская_Б',
        format: 'Практика',
      },
      {
        time: '16:30 - 18:00',
        title: 'Генеративная типографика против ручного набора',
        speaker: 'Григорий Быков & Данила Козлов',
        hall: 'Баттл_зал',
        format: 'Дискуссия',
      },
      {
        time: '18:30 - 20:00',
        title: 'Живая сессия: Эксперименты с крупноформатными буквами деревянного набора',
        speaker: 'Весь состав ШУМа',
        hall: 'Мастерская_А',
        format: 'Перформанс',
      },
    ],
  },
  {
    title: 'День 02 — 13 июня: Фактура и оттиск',
    accent: 'ink',
    sessions: [
      {
        time: '11:30 - 13:00',
        title: 'Брутализм в книжном дизайне: как заверстать 500 страниц хаоса',
        speaker: 'Александра Логинова',
        hall: 'Лектор_А',
        format: 'Лекция',
      },
      {
        time: '13:30 - 16:00',
        title: 'Глубокая печать с использованием нетрадиционных материалов',
        speaker: "Мастерская 'Офорт'",
        hall: 'Мастерская_Б',
        format: 'Практика',
      },
    ],
  },
]

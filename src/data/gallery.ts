const photos = import.meta.glob<string>('../assets/images/gallery/*.webp', {
  eager: true,
  import: 'default',
})

const alts = [
  'Металлические литеры высокой печати',
  'Деревянный шрифт WOOD TYPE',
  'Касса с деревянными литерами',
  'Шелкография: печатник протягивает краску через сетку',
  'Нанесение краски на печатную форму',
  'Оттиск красной краской в шелкографии',
  'Резьба линогравюры',
  'Винтажные немецкие плакаты',
  'Деревянная литера крупным планом',
]

export const gallery = Object.keys(photos)
  .sort()
  .map((path, index) => ({ src: photos[path], alt: alts[index] }))

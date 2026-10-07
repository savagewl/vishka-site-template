import manifestoPhoto from '../../assets/images/manifesto.webp'
import { gallery } from '../../data/gallery'
import { Tag } from '../../components/ui/Tag/Tag'
import styles from './Manifesto.module.css'

const riotPoints = [
  'возвращаем в дело тяжелую краску',
  'ручной набор на старых прессах',
  'случайные подтеки, неидеальный трекинг',
  'и плакатную ярость.',
]

export function Manifesto() {
  return (
    <section id="manifesto" className={styles.manifesto} aria-labelledby="manifesto-title">
      <div className={styles.meta}>
        <Tag>Наш манифест</Tag>
        <span className={styles.file}>[ RIOT-MANIFESTO-01.TXT ]</span>
      </div>

      <div className={styles.intro}>
        <div className={styles.introText}>
          <h2 id="manifesto-title" className={styles.title}>
            <span className={styles.titleLead}>
              Мы <span className={styles.accent}>против</span> стерильного веба.
            </span>
            <span className={styles.titleSub}>
              Мы за шероховатость, оттиск и хаос человеческой случайности.
            </span>
          </h2>
          <p className={styles.text}>
            Алгоритмы вычистили характер из букв. <br />
            Типографика стала удобной, плоской, безразличной.
          </p>
        </div>
        <figure className={`${styles.photo} ${styles.duotone}`}>
          <img
            src={manifestoPhoto}
            alt="Печатник прокатывает валик по наборной форме с цветными литерами"
            width={396}
            height={265}
            loading="lazy"
          />
        </figure>
      </div>

      <div className={styles.riot}>
        <ul id="gallery" className={styles.gallery} aria-label="Галерея фестиваля">
          {gallery.map((photo) => (
            <li key={photo.src} className={`${styles.galleryItem} ${styles.duotone}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </li>
          ))}
        </ul>

        <div className={styles.riotText}>
          <div>
            <h3 className={styles.riotTitle}>Мы объявляем бунт:</h3>
            <ul className={styles.riotList}>
              {riotPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <p className={styles.text}>Текст должен кричать, а не тихо шептать со стеклянных экранов.</p>
        </div>
      </div>
    </section>
  )
}

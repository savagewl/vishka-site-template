import { faq } from '../../data/faq'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <div className={styles.slant} aria-hidden="true" />

      <div className={styles.inner}>
        <SectionHeader id="faq-title" title="Технический блок" tone="paper" />

        <div className={styles.list}>
          {faq.map((item) => (
            <details key={item.question} className={styles.item} open>
              <summary className={styles.question}>
                <span className={styles.mark}>[ ? ]</span> {item.question}
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

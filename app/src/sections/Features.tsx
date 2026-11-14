import Reveal from '../components/Reveal'
import { useLang } from '../i18n'

const ICONS = [
  <path key="mic" d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-7 9a7 7 0 0 0 14 0h2a9 9 0 0 1-8 8.94V23h-2v-2.06A9 9 0 0 1 3 12h2Z" />,
  <path key="desktop" d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7v2h3v2H7v-2h3v-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2v9h16V6H4Z" />,
  <path key="shield" d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.2 6 2.2V11c0 3.9-2.5 7.3-6 8.7-3.5-1.4-6-4.8-6-8.7V6.4l6-2.2Zm-1 4.3v3H8v2h3v3h2v-3h3v-2h-3v-3h-2Z" />,
]

export default function Features() {
  const { t } = useLang()
  return (
    <section id="features" className="noise bg-[var(--blush)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">{t.features.kicker}</p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-6xl">{t.features.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.features.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <article className="card-line hover-lift flex h-full flex-col rounded-[24px] bg-[var(--cream)] p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-[1.5px] border-[var(--line)] bg-[var(--pink)]">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
                    {ICONS[index]}
                  </svg>
                </div>
                <h3 className="font-display mt-5 text-2xl tracking-wide">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <span key={chip} className="tag-pill !bg-[var(--mint)] text-[11px]">{chip}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

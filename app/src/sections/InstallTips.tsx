import Reveal from '../components/Reveal'
import { useLang } from '../i18n'

export default function InstallTips() {
  const { t } = useLang()
  return (
    <section id="install" className="noise bg-[var(--peach)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">{t.install.kicker}</p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-6xl">{t.install.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.install.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="card-line h-full rounded-[24px] bg-[var(--cream)] p-7">
                <span className="font-display text-3xl text-[var(--pink-deep)]">0{index + 1}</span>
                <h3 className="font-display mt-3 text-2xl tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

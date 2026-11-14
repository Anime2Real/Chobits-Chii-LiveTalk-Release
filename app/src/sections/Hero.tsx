import chiiHero from '../assets/chii-hero.webp'
import BounceText, { FlowerMark } from '../components/BounceText'
import Reveal from '../components/Reveal'
import { useLang } from '../i18n'
import { SOURCE_URL } from '../links'

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="top" className="noise relative overflow-hidden bg-[var(--cream)] pb-20 pt-24 md:pb-28 md:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[var(--pink)] opacity-60 blur-2xl" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[var(--lavender)] opacity-70 blur-2xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[var(--mint)] opacity-60 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div className="text-center md:text-left">
          <Reveal>
            <span className="tag-pill">
              <span className="heartbeat inline-block h-2 w-2 rounded-full bg-[var(--pink-deep)]" />
              {t.hero.tag}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display mt-6 text-[15vw] leading-[1.08] tracking-wide md:text-[5.2rem]">
              <BounceText text={t.hero.title} />{' '}
              <BounceText
                text={t.hero.accent}
                charClassName={() => 'text-[var(--pink-deep)]'}
              />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--ink-soft)] md:mx-0 md:text-lg">
              {t.hero.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a href="#download" className="btn-pill btn-pill--dark text-base">
                <span className="bob inline-block">↓</span> {t.hero.download}
              </a>
              <a href={SOURCE_URL} target="_blank" rel="noreferrer" className="btn-pill">
                {t.hero.source} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 text-xs font-bold tracking-widest text-[var(--ink-soft)]">
              {t.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto w-full max-w-[340px] md:max-w-[380px]">
          <div className="float-y relative">
            <FlowerMark className="wiggle absolute -left-5 top-8 z-10 h-10 w-10 text-[var(--pink-deep)]" />
            <div className="arch-frame hover-lift relative bg-white">
              <img src={chiiHero} alt="Chii LiveTalk desktop companion" className="block h-auto w-full" loading="eager" />
            </div>
            <div className="card-line absolute -bottom-5 left-4 rotate-[-3deg] rounded-2xl bg-[var(--blush)] px-4 py-2 font-display text-base">
              ちぃ、ここにいるよ ♡
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

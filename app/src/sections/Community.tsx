import qqQr from '../assets/qq-group-qr.jpg'
import discordQr from '../assets/discord-qr.png'
import { useLang } from '../i18n'
import { DISCORD_URL, QQ_URL } from '../links'

export default function Community() {
  const { t } = useLang()
  return (
    <section id="community" className="noise bg-[var(--sage)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <div className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">{t.community.kicker}</p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-6xl">{t.community.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
            {t.community.body}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          <a
            href={QQ_URL}
            target="_blank"
            rel="noreferrer"
            className="card-line hover-lift flex h-full flex-col items-center rounded-[24px] bg-[var(--cream)] p-7 text-center"
          >
            <span className="rounded-2xl bg-white p-3 shadow-[0_5px_0_rgba(84,69,63,0.18)]">
              <img src={qqQr} alt={t.community.qqAlt} className="block h-40 w-40 object-contain" />
            </span>
            <span className="font-display mt-4 text-2xl tracking-wide">{t.community.qq}</span>
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="card-line hover-lift flex h-full flex-col items-center rounded-[24px] bg-[var(--cream)] p-7 text-center"
          >
            <span className="rounded-2xl bg-white p-3 shadow-[0_5px_0_rgba(84,69,63,0.18)]">
              <img src={discordQr} alt={t.community.discordAlt} className="block h-40 w-40 object-contain" />
            </span>
            <span className="font-display mt-4 text-2xl tracking-wide">{t.community.discord}</span>
          </a>
        </div>

        <p className="mt-7 text-center text-[11px] font-bold tracking-wide text-[var(--ink-soft)]/80">
          {t.community.note}
        </p>
      </div>
    </section>
  )
}

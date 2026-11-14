import chiiLogo from '../assets/chii-logo.webp'
import { useLang } from '../i18n'
import { FAMILY_URL, PIPECAT_URL, RELEASES_URL, SOURCE_URL } from '../links'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[var(--ink-deep)] text-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <img src={chiiLogo} alt="Chobits LiveTalk" className="h-9 w-9 rounded-full" />
            <span className="font-display text-lg tracking-wide">Chobits LiveTalk</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--cream)]/65">{t.footer.tagline}</p>
          <p className="mt-4 text-xs leading-relaxed text-[var(--cream)]/45">{t.footer.license}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
          <a href={SOURCE_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--pink)]">{t.footer.source} ↗</a>
          <a href={PIPECAT_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--pink)]">{t.footer.pipecat} ↗</a>
          <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--pink)]">{t.footer.releases} ↗</a>
          <a href={FAMILY_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--pink)]">{t.footer.family} ↗</a>
        </div>
      </div>
      <div className="border-t border-[var(--cream)]/10 px-4 py-4 text-center text-[11px] text-[var(--cream)]/35 md:px-6">
        © {year} Anime2Real · Chobits / ちぃ © CLAMP
      </div>
    </footer>
  )
}

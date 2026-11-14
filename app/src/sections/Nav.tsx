import chiiLogo from '../assets/chii-logo.webp'
import { useLang, type Lang } from '../i18n'

const LANGS: Array<{ id: Lang; label: string }> = [
  { id: 'zh', label: '中' },
  { id: 'ja', label: '日' },
  { id: 'en', label: 'EN' },
]

export default function Nav() {
  const { t, lang, setLang } = useLang()
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)]/15 bg-[var(--cream-soft)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={chiiLogo} alt="Chobits LiveTalk" className="h-9 w-9 rounded-full" />
          <span className="font-display text-lg tracking-wide">Chobits LiveTalk</span>
        </a>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-6 text-sm font-bold text-[var(--ink-soft)] md:flex">
          <a href="#features" className="hover:text-[var(--ink)]">{t.nav.features}</a>
          <a href="#download" className="hover:text-[var(--ink)]">{t.nav.download}</a>
          <a href="#install" className="hover:text-[var(--ink)]">{t.nav.install}</a>
          <a href="#community" className="hover:text-[var(--ink)]">
            {t.nav.community}
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-1 md:ml-0">
          {LANGS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLang(item.id)}
              aria-pressed={lang === item.id}
              className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
                lang === item.id
                  ? 'bg-[var(--ink-deep)] text-[var(--cream)]'
                  : 'text-[var(--ink-soft)] hover:bg-[var(--blush)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

import { useEffect, useState, type ReactNode } from 'react'
import BounceText, { FlowerMark } from '../components/BounceText'
import Reveal from '../components/Reveal'
import { useLang } from '../i18n'
import { RELEASES_URL, REPO_URL } from '../links'

const OWNER_REPO = REPO_URL.replace('https://github.com/', '')
const API_URL = `https://api.github.com/repos/${OWNER_REPO}/releases/latest`

interface Asset {
  name: string
  url: string
  size: number
}

interface ReleaseInfo {
  tag: string
  date: string
  assets: Asset[]
}

type PlatformKey = 'mac-arm' | 'mac-intel' | 'win' | 'linux'

function classify(name: string): PlatformKey | null {
  const n = name.toLowerCase()
  if (n.endsWith('.blockmap') || n.endsWith('.yml') || n.endsWith('.yaml')) return null
  if (n.endsWith('.dmg')) {
    if (n.includes('arm64') || n.includes('aarch64') || n.includes('silicon')) return 'mac-arm'
    return 'mac-intel'
  }
  if (n.endsWith('.exe') || n.endsWith('.msi')) return 'win'
  if (n.endsWith('.appimage')) return null
  if (n.endsWith('.deb')) return 'linux'
  return null
}

function formatSize(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function archLabel(name: string): string {
  const n = name.toLowerCase()
  if (n.includes('arm64') || n.includes('aarch64')) return 'ARM64'
  if (n.includes('x86_64') || n.includes('amd64') || n.includes('x64')) return 'x64'
  return ''
}

function shortLabel(name: string): string {
  const n = name.toLowerCase()
  if (n.endsWith('.deb')) return 'DEB'
  if (n.endsWith('.dmg')) return 'DMG'
  if (n.endsWith('.exe')) return 'EXE'
  if (n.endsWith('.msi')) return 'MSI'
  return name
}

const ICONS: Record<PlatformKey, ReactNode> = {
  'mac-arm': (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.5.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.75-.93s2.25.93 3.78.9c1.56-.03 2.55-1.41 3.5-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.09-4.61ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.73-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.62Z" />
    </svg>
  ),
  'mac-intel': (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M4 4h16v10H4V4Zm0 12h16v4H4v-4Zm2-10v8h12V6H6Z" />
    </svg>
  ),
  win: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm9 7.5H3v6l7.5 1.1V13Zm1.5-9.9L21 1.5v10h-7.5V3.1Zm7.5 9.9v9.4l-7.5-1.4v-8H21Z" />
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M12 2c-1.7 0-3 1.4-3 3.1 0 .8.2 1.5.5 2.2-.9 1.2-1.5 2.7-1.5 4.4 0 1.7-.6 2.5-1.4 3.7-.7 1-1.1 2-1.1 3.1 0 1.9 1.3 3.5 3.2 3.5.8 0 1.5-.3 2.1-.8.4.2.8.3 1.2.3s.8-.1 1.2-.3c.6.5 1.3.8 2.1.8 1.9 0 3.2-1.6 3.2-3.5 0-1.1-.4-2.1-1.1-3.1-.8-1.2-1.4-2-1.4-3.7 0-1.7-.6-3.2-1.5-4.4.3-.7.5-1.4.5-2.2C15 3.4 13.7 2 12 2Zm-1.2 3.2c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Zm2.4 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Zm-2.1 3.2c1.2 0 2.2 1.1 2.2 2.4 0 1.1-.6 1.7-1.3 2.2-.4.3-.6.6-.6 1.1h-1c0-.9.4-1.4 1-1.9.6-.4 1-.8 1-1.4 0-.8-.6-1.4-1.3-1.4s-1.3.6-1.3 1.4h-1c0-1.3.9-2.4 2.3-2.4Z" />
    </svg>
  ),
}

export default function Download() {
  const { t } = useLang()
  const [release, setRelease] = useState<ReleaseInfo | null>(null)
  const [state, setState] = useState<'loading' | 'ready' | 'empty'>('loading')

  useEffect(() => {
    let cancelled = false
    fetch(API_URL)
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data) => {
        if (cancelled) return
        const assets: Asset[] = (data.assets ?? [])
          .map((asset: { name: string; browser_download_url: string; size: number }) => ({
            name: asset.name,
            url: asset.browser_download_url,
            size: asset.size,
          }))
          .filter((asset: Asset) => classify(asset.name) !== null)
        if (assets.length === 0) {
          setState('empty')
          return
        }
        setRelease({
          tag: data.tag_name ?? '',
          date: (data.published_at ?? '').slice(0, 10),
          assets,
        })
        setState('ready')
      })
      .catch(() => {
        if (!cancelled) setState('empty')
      })
    return () => {
      cancelled = true
    }
  }, [])

  const assetsFor = (key: PlatformKey): Asset[] =>
    (release?.assets.filter((asset) => classify(asset.name) === key) ?? []).sort((a, b) =>
      `${archLabel(a.name)} ${shortLabel(a.name)}`.localeCompare(
        `${archLabel(b.name)} ${shortLabel(b.name)}`
      )
    )

  const platforms: PlatformKey[] = ['mac-arm', 'mac-intel', 'win', 'linux']

  return (
    <section id="download" className="noise bg-[var(--mint)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">{t.download.kicker}</p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-6xl">
            <BounceText text={t.download.title} />
          </h2>
          {state === 'ready' && release ? (
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--ink-soft)]">
              <span className="tag-pill !bg-[var(--pink)]">{release.tag}</span>
              {t.download.released} {release.date}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((key, index) => {
            const assets = assetsFor(key)
            const card = t.download.cards[index]
            return (
              <Reveal key={key} delay={index * 100}>
                <div className="card-line hover-lift flex h-full flex-col rounded-[24px] bg-white p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[1.5px] border-[var(--line)] bg-[var(--cream)]">
                    {ICONS[key]}
                  </div>
                  <h3 className="font-display mt-4 text-2xl tracking-wide">{card.label}</h3>
                  <p className="mt-1 text-sm font-bold text-[var(--ink-soft)]">{card.sub}</p>
                  <div className="mt-auto flex flex-col gap-2 pt-6">
                    {state === 'loading' ? (
                      <span className="btn-pill w-full justify-center opacity-60">{t.download.loading}</span>
                    ) : state === 'ready' && assets.length > 0 ? (
                      assets.map((asset) => {
                        const label =
                          key === 'linux' && archLabel(asset.name)
                            ? `${archLabel(asset.name)} ${shortLabel(asset.name)}`
                            : shortLabel(asset.name)
                        return (
                          <a
                            key={asset.name}
                            href={asset.url}
                            className="btn-pill btn-pill--dark w-full justify-center"
                            aria-label={`${t.download.download} ${label} · ${formatSize(asset.size)}`}
                          >
                            ↓ {label} · {formatSize(asset.size)}
                          </a>
                        )
                      })
                    ) : (
                      <a href={RELEASES_URL} className="btn-pill w-full justify-center opacity-70">
                        {t.download.emptyLink}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {state === 'empty' ? (
          <Reveal delay={200}>
            <div className="card-line mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-[24px] bg-[var(--cream)] px-8 py-8 text-center md:flex-row md:text-left">
              <FlowerMark className="heartbeat h-10 w-10 shrink-0 text-[var(--pink-deep)]" />
              <div>
                <p className="font-display text-xl tracking-wide">{t.download.emptyTitle}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{t.download.emptyBody}</p>
                <a href={RELEASES_URL} className="mt-3 inline-block text-sm font-bold text-[var(--pink-deep)] underline">
                  {t.download.emptyLink}
                </a>
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}

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

type PlatformKey = 'mac' | 'win' | 'linux'

function classify(name: string): PlatformKey | null {
  const n = name.toLowerCase()
  if (n.endsWith('.blockmap') || n.endsWith('.yml') || n.endsWith('.yaml')) return null
  if (n.endsWith('.dmg')) return 'mac'
  if (n.endsWith('.exe') || n.endsWith('.msi')) return 'win'
  if (n.endsWith('.appimage')) return null
  if (n.endsWith('.deb')) return 'linux'
  return null
}

function formatSize(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function archLabel(name: string, key: PlatformKey): string {
  if (key === 'win') return ''
  const n = name.toLowerCase()
  if (key === 'mac') {
    if (n.includes('arm64') || n.includes('aarch64') || n.includes('silicon')) return 'Apple Silicon'
    return 'Intel'
  }
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
  mac: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.5.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.75-.93s2.25.93 3.78.9c1.56-.03 2.55-1.41 3.5-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.09-4.61ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.73-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.62Z" />
    </svg>
  ),
  win: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm9 7.5H3v6l7.5 1.1V13Zm1.5-9.9L21 1.5v10h-7.5V3.1Zm7.5 9.9v9.4l-7.5-1.4v-8H21Z" />
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M12.5 1.6c-1.5 0-2.7 1.2-2.9 2.8-.1.7-.1 1.5-.3 2.1-.3 1-1 1.9-1.3 2.9-.2.7-.3 1.5-.4 2.2-.1.6-.2 1.3-.5 1.8-.3.6-.8 1.1-1.2 1.7-.3.4-.6.9-.8 1.4-.2.6-.3 1.3-.2 1.9.1.5.4 1.1.8 1.3.4.3 1 .4 1.5.5.6.2 1.2.3 1.9.4.8.1 1.6.2 2.4.2 1.3 0 2.6-.1 3.8-.4.7-.2 1.4-.5 1.9-1 .4-.4.6-1 .5-1.6-.1-.7-.5-1.3-.9-1.9-.4-.6-.9-1.2-1.2-1.8-.3-.6-.4-1.2-.5-1.9-.1-.8-.2-1.6-.4-2.4-.2-1-.7-1.9-1-2.9-.2-.7-.2-1.4-.3-2.1-.2-1.6-1.3-2.8-2.6-2.9l-.5-.1Zm-1.9 3.5c.5-.1 1 .1 1.1.6.1.5-.2 1-.7 1.1-.5.1-1-.2-1.1-.6-.1-.5.2-1 .7-1.1Zm3.4 0c.5-.1 1 .2 1.1.6.1.5-.2 1-.7 1.1-.5.1-1-.1-1.1-.6-.1-.5.2-1 .7-1.1Zm-3.2 2.1c.5-.3 1.1-.4 1.7-.3.6.1 1.1.4 1.4.9.1.2.1.4-.1.6-.3.2-.8.1-1.2 0-.5-.1-1.1 0-1.5.3-.2.1-.4.1-.5-.1-.1-.2-.1-.4 0-.6.1-.4.1-.6.2-.8Zm-4.3 8.1c.4-.3.9-.6 1.4-.7.5-.1 1-.1 1.5 0 .4.1.7.3.9.6.1.2.1.5-.1.7-.3.3-.8.4-1.3.4-.6 0-1.2-.1-1.7-.3-.3-.1-.6-.3-.7-.5v-.2Zm5.9-.3c.4-.2.9-.4 1.4-.4.5 0 1 .1 1.4.3.3.2.6.4.7.7.1.3-.1.6-.3.7-.4.2-.9.2-1.3.2-.5 0-1.1-.1-1.5-.3-.3-.1-.5-.3-.6-.5 0-.3 0-.5.2-.7Z" />
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
      `${archLabel(a.name, key)} ${shortLabel(a.name)}`.localeCompare(
        `${archLabel(b.name, key)} ${shortLabel(b.name)}`
      )
    )

  const platforms: PlatformKey[] = ['mac', 'win', 'linux']

  return (
    <section id="download" className="noise bg-[var(--mint)]">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
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
                        const arch = archLabel(asset.name, key)
                        const label =
                          key === 'mac'
                            ? arch
                            : arch
                              ? `${arch} ${shortLabel(asset.name)}`
                              : shortLabel(asset.name)
                        return (
                          <a
                            key={asset.name}
                            href={asset.url}
                            className="btn-pill btn-pill--dark w-full justify-center !px-4 text-[13px]"
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

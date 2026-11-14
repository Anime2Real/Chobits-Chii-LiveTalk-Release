/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'zh' | 'ja' | 'en'

const zh = {
  nav: { features: '功能', download: '下载', install: '安装', community: '社区' },
  hero: {
    tag: 'VOICE-FIRST CHII COMPANION',
    title: '和 ちぃ',
    accent: '说说话',
    intro: '透明桌宠 + Pipecat 实时语音。她会在桌面角落听你说话、看着你、用 Live2D 口型回应你。',
    note: '按住说话或免按键收音 · 支持打断 · macOS / Windows / Linux',
    download: '下载 LiveTalk',
    community: '加入社区',
  },
  features: {
    kicker: 'WHAT IT DOES',
    title: '不只是会说话',
    items: [
      {
        title: '实时全双工语音',
        body: '16kHz 上行 / 24kHz 下行，Pipecat 负责 VAD、ASR、LLM 与 TTS；说话中可随时打断。',
        chips: ['Pipecat raw_pcm', 'barge-in', '低延迟'],
      },
      {
        title: '角色住在桌面',
        body: '透明、置顶、可拖动、可点击穿透。关闭只隐藏到托盘，快捷键随时叫她出来。',
        chips: ['Live2D 口型', '托盘常驻', '鼠标穿透'],
      },
      {
        title: '本地优先',
        body: '内置 mock、本地 Pipecat sidecar 或自托管网关三种接法；token 加密、日志可诊断、设备自检。',
        chips: ['本地后端', '诊断面板', '设备自检'],
      },
    ],
  },
  download: {
    kicker: 'DOWNLOAD',
    title: '选择你的平台',
    released: '发布于',
    loading: '正在寻找最新版本…',
    emptyTitle: '还没有可用的发布包',
    emptyBody: '可以先去 GitHub Releases 看看最新进展。',
    emptyLink: '打开 Releases ↗',
    download: '下载',
    cards: [
      { label: 'macOS', sub: 'Apple Silicon' },
      { label: 'macOS', sub: 'Intel' },
      { label: 'Windows', sub: '10 / 11' },
      { label: 'Linux', sub: 'DEB' },
    ],
  },
  install: {
    kicker: 'INSTALL',
    title: '安装小贴士',
    items: [
      {
        title: 'macOS',
        body: '打开 dmg，把 Chobits LiveTalk 拖进 Applications。首次启动需要在系统设置里允许麦克风与摄像头；未签名版本可能需要在“隐私与安全性”里放行。',
      },
      {
        title: 'Windows',
        body: '运行 NSIS 安装包。若 SmartScreen 提示未知发布者，选择“更多信息 → 仍要运行”；正式签名版本会逐步减少这类提示。',
      },
      {
        title: 'Linux',
        body: '下载 deb，用系统包管理器安装。语音需要 PipeWire / PulseAudio 和可用的输入输出设备；后续版本从 Releases 手动更新。',
      },
    ],
  },
  community: {
    kicker: 'COMMUNITY',
    title: '来玩呀',
    body: '扫码加入 Anime2Real 社区。QQ 群和 Discord 会同步更新、安装包和日常闲聊。',
    qq: 'QQ 群 809591826',
    discord: 'Discord',
    qqAlt: 'Anime2Real QQ 群二维码',
    discordAlt: 'Anime2Real Discord 二维码',
    note: '二维码来自 Mascot 发布页 · 扫码后在对应 App 内加入',
  },
  footer: {
    tagline: '小叽的语音优先桌面端。',
    releases: '全部 Releases',
    family: 'Anime2Real 家族',
    license: '代码 MIT；Live2D 与角色素材仅限非商业使用。',
  },
}

const ja: typeof zh = {
  nav: { features: '機能', download: 'ダウンロード', install: 'インストール', community: 'コミュニティ' },
  hero: {
    tag: 'VOICE-FIRST CHII COMPANION',
    title: 'ちぃと',
    accent: '話そう',
    intro: '透明なデスクトップコンパニオン + Pipecat のリアルタイム音声。ちぃが声を聞き、こちらを見て、Live2D の口パクで返事をします。',
    note: '押して話す / ハンズフリー · 割り込み対応 · macOS / Windows / Linux',
    download: 'LiveTalk をダウンロード',
    community: 'コミュニティに参加',
  },
  features: {
    kicker: 'WHAT IT DOES',
    title: 'ただ話すだけじゃない',
    items: [
      {
        title: 'リアルタイム全二重音声',
        body: '16kHz 上り / 24kHz 下り。VAD・ASR・LLM・TTS は Pipecat が担当し、話している途中でも割り込めます。',
        chips: ['Pipecat raw_pcm', 'barge-in', '低遅延'],
      },
      {
        title: 'デスクトップに住む',
        body: '透明・最前面・ドラッグ可能・マウス透過。閉じてもトレイに残り、ショートカットでいつでも呼べます。',
        chips: ['Live2D リップシンク', 'トレイ常駐', 'マウス透過'],
      },
      {
        title: 'ローカル優先',
        body: '内蔵 mock、ローカル Pipecat sidecar、セルフホスト gateway の3通り。トークン暗号化・診断・デバイス自己診断付き。',
        chips: ['ローカル backend', '診断パネル', 'デバイス診断'],
      },
    ],
  },
  download: {
    kicker: 'DOWNLOAD',
    title: 'プラットフォームを選択',
    released: '公開日',
    loading: '最新版を探しています…',
    emptyTitle: 'まだ配布パッケージがありません',
    emptyBody: 'GitHub Releases を確認してください。',
    emptyLink: 'Releases を開く ↗',
    download: 'ダウンロード',
    cards: [
      { label: 'macOS', sub: 'Apple Silicon' },
      { label: 'macOS', sub: 'Intel' },
      { label: 'Windows', sub: '10 / 11' },
      { label: 'Linux', sub: 'DEB' },
    ],
  },
  install: {
    kicker: 'INSTALL',
    title: 'インストールのヒント',
    items: [
      {
        title: 'macOS',
        body: 'dmg を開き、Chobits LiveTalk を Applications へ。初回起動時にマイクとカメラを許可してください。未署名版は「プライバシーとセキュリティ」で許可が必要な場合があります。',
      },
      {
        title: 'Windows',
        body: 'NSIS インストーラを実行します。SmartScreen が出る場合は「詳細情報 → 実行」を選んでください。署名済み版では徐々に表示されなくなります。',
      },
      {
        title: 'Linux',
        body: 'deb をパッケージマネージャでインストール。PipeWire / PulseAudio と入出力デバイスが必要です。更新は Releases から手動で行います。',
      },
    ],
  },
  community: {
    kicker: 'COMMUNITY',
    title: 'あそびにきてね',
    body: 'QR コードから Anime2Real コミュニティへ。QQ グループと Discord で更新情報・インストーラ・雑談を共有しています。',
    qq: 'QQ グループ 809591826',
    discord: 'Discord',
    qqAlt: 'Anime2Real QQ グループのQRコード',
    discordAlt: 'Anime2Real Discord のQRコード',
    note: 'Mascot 公開ページの QR コードです · 対応アプリで読み取ってください',
  },
  footer: {
    tagline: 'ちぃの音声ファースト・デスクトップアプリ。',
    releases: 'すべての Releases',
    family: 'Anime2Real ファミリー',
    license: 'コードは MIT。Live2D とキャラクター素材は非商用のみ。',
  },
}

const en: typeof zh = {
  nav: { features: 'Features', download: 'Download', install: 'Install', community: 'Community' },
  hero: {
    tag: 'VOICE-FIRST CHII COMPANION',
    title: 'Talk with',
    accent: 'Chii',
    intro: 'A transparent desktop companion plus a Pipecat real-time voice loop. She listens, looks at you, and answers with Live2D lip sync.',
    note: 'Hold to talk or hands-free · barge-in · macOS / Windows / Linux',
    download: 'Download LiveTalk',
    community: 'Join the community',
  },
  features: {
    kicker: 'WHAT IT DOES',
    title: 'More than a chat window',
    items: [
      {
        title: 'Real-time full duplex',
        body: '16kHz in / 24kHz out. Pipecat handles VAD, ASR, LLM and TTS, so you can interrupt her mid-sentence.',
        chips: ['Pipecat raw_pcm', 'barge-in', 'low latency'],
      },
      {
        title: 'Lives on your desktop',
        body: 'Transparent, always-on-top, draggable and click-through. Closing hides her to the tray; a shortcut brings her back.',
        chips: ['Live2D lip sync', 'tray resident', 'click-through'],
      },
      {
        title: 'Local first',
        body: 'Use the built-in mock, a local Pipecat sidecar, or your own gateway. Encrypted tokens, diagnostics and device self-test included.',
        chips: ['local backend', 'diagnostics', 'device self-test'],
      },
    ],
  },
  download: {
    kicker: 'DOWNLOAD',
    title: 'Choose your platform',
    released: 'Released',
    loading: 'Looking for the latest build…',
    emptyTitle: 'No release package yet',
    emptyBody: 'Check GitHub Releases for progress.',
    emptyLink: 'Open Releases ↗',
    download: 'Download',
    cards: [
      { label: 'macOS', sub: 'Apple Silicon' },
      { label: 'macOS', sub: 'Intel' },
      { label: 'Windows', sub: '10 / 11' },
      { label: 'Linux', sub: 'DEB' },
    ],
  },
  install: {
    kicker: 'INSTALL',
    title: 'Install tips',
    items: [
      {
        title: 'macOS',
        body: 'Open the dmg and drag Chobits LiveTalk into Applications. Allow microphone and camera on first launch; unsigned builds may need approval in Privacy & Security.',
      },
      {
        title: 'Windows',
        body: 'Run the NSIS installer. If SmartScreen warns about an unknown publisher, choose “More info → Run anyway”; signed builds will reduce this over time.',
      },
      {
        title: 'Linux',
        body: 'Install the deb with your package manager. Voice needs PipeWire / PulseAudio and working input/output devices; update manually from Releases.',
      },
    ],
  },
  community: {
    kicker: 'COMMUNITY',
    title: 'Come say hi',
    body: 'Scan to join the Anime2Real community. Updates, installers and casual chat live in both QQ and Discord.',
    qq: 'QQ group 809591826',
    discord: 'Discord',
    qqAlt: 'Anime2Real QQ group QR code',
    discordAlt: 'Anime2Real Discord QR code',
    note: 'QR codes from the Mascot release page · scan inside the matching app',
  },
  footer: {
    tagline: 'A voice-first desktop companion for Chii.',
    releases: 'All releases',
    family: 'Anime2Real family',
    license: 'Code MIT; Live2D and character assets are non-commercial only.',
  },
}

const dictionaries = { zh, ja, en } as const

interface LangValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof zh
}

const LangContext = createContext<LangValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('livetalk-release-lang')
    return saved === 'ja' || saved === 'en' ? saved : 'zh'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('livetalk-release-lang', next)
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangValue {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang must be used inside LangProvider')
  return value
}

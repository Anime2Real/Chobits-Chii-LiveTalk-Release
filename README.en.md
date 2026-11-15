<div align="center">
  <img src="app/src/assets/chii-logo.webp" alt="Chii" width="120" height="120" />
  <h1>Chobits-Chii-LiveTalk-Release</h1>
  <p><b>Chii~</b> the release page and installer distribution for Chii's voice-first desktop companion</p>
  <p>The user-facing release outlet for <code>Chobits-Chii-LiveTalk</code>: installers, auto-update metadata, and the landing page source under <code>app/</code>. The page is built by <b>GitHub Actions</b> and deployed to <b>GitHub Pages</b>. For server and data security reasons, the LiveTalk client source code is not open-sourced at this time. We will consider open-sourcing it after completing a thorough security review.</p>
  <p>
    <a href="./README.md">简体中文</a> ｜ <a href="./README.ja.md">日本語</a> ｜ <a href="./README.en.md">English</a>
  </p>
  <p>
    <a href="https://madewithlove.org.in"><img alt="Made with Love" src="https://img.shields.io/badge/Made%20with-Love-ff69b4.svg"></a>
    <a href="https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Chobits--Chii--LiveTalk--Release-181717?logo=github"></a>
    <a href="https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/Anime2Real/Chobits-Chii-LiveTalk-Release"></a>
    <a href="https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases"><img alt="Downloads" src="https://img.shields.io/github/downloads/Anime2Real/Chobits-Chii-LiveTalk-Release/total"></a>
    <a href="https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/actions/workflows/deploy.yml"><img alt="Deploy to GitHub Pages" src="https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/actions/workflows/deploy.yml/badge.svg"></a>
    <img alt="Platform" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey">
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg"></a>
  </p>
</div>

> 💖 If this project helps you, please give it a Star on [GitHub](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release) — your support helps more people hear Chii!

> ⚠️ Note: Chobits and the character Chii are copyright CLAMP and the respective rights holders. The landing page and workflows in this repository are released under MIT; the LiveTalk client source code is not open-sourced at this time. Live2D models, Cubism Core and character assets remain non-commercial only — see [ASSETS.md](./ASSETS.md).

`Chobits-Chii-LiveTalk` is the **voice-first desktop companion** of the Chii family: a transparent, always-on-top Live2D character window connected to a Pipecat real-time voice pipeline for full-duplex conversation, barge-in and lip-synced replies. It deliberately omits chat history, multi-session management and plugins, focusing on one path: talking with the character.

This repository is its user-facing release outlet. GitHub Releases hosts the installers and auto-update metadata; `app/` contains the landing page source, built by GitHub Actions and deployed to GitHub Pages. The application source (`Chobits-Chii-LiveTalk`) and the voice pipeline server (`Chobits-Chii-Pipecat`) are not public at this time.

## ✨ Highlights

- **Transparent character window**: frameless, always-on-top, draggable and click-through. Closing hides her to the tray; `Ctrl/Cmd+Shift+Space` starts or ends a conversation and `Ctrl/Cmd+Shift+L` shows or hides the character.
- **Real-time full duplex**: 16kHz PCM up and 24kHz PCM down, with Pipecat handling VAD / ASR / LLM / TTS and support for barge-in.
- **Live2D lip sync and gaze**: consumes the `lip_sync` envelope to drive the mouth; speech bubbles can show translations in the UI language (Simplified Chinese / Japanese / English).
- **Out of the box**: connects to the Anime2Real official voice service on first launch; switch to the built-in mock, a local Pipecat sidecar, or your own gateway.
- **Diagnostics and self-test**: connection latency, up/down frame counts, reconnect status and log paths at a glance; one-click microphone / speaker / camera tests.
- **Auto-update**: Windows and macOS installers include `electron-updater`; Linux ships as a deb and updates manually from Releases.

## 🗂️ Repository layout

| Path | Contents |
| --- | --- |
| `app/` | Landing page source (React + Vite + Tailwind), built and deployed to GitHub Pages by `deploy.yml` |
| `.github/workflows/deploy.yml` | Builds `app/` and deploys GitHub Pages |
| `ASSETS.md` | Licensing for Live2D / character assets and third-party components |
| `README*.md` | Simplified Chinese / Japanese / English documentation |

## 🌿 Branches and tags

| Branch / tag | Purpose |
| --- | --- |
| `main` | The only content branch (default). The landing page, `deploy.yml` and all three READMEs are maintained here |
| `v*` | Release tags in the private source repository, matching the `package.json` version; they trigger `release.yml` there to build and publish to this repository |

## ⬇️ Download

Download the latest version from the landing page (recommended):

**https://anime2real.github.io/Chobits-Chii-LiveTalk-Release/**

The page lists the latest installers for each platform. You can also download directly from [Releases](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases):

| Platform | File |
| --- | --- |
| macOS Apple Silicon | `Chobits-LiveTalk_<version>_mac_arm64.dmg` |
| macOS Intel | `Chobits-LiveTalk_<version>_mac_x64.dmg` |
| Windows 10/11 x64 | `Chobits-LiveTalk_<version>_win_x64.exe` |
| Linux x64 | `Chobits-LiveTalk_<version>_linux_amd64.deb` |
| Linux ARM64 | `Chobits-LiveTalk_<version>_linux_arm64.deb` |

> Code signing and notarization are configured through the source repository's Secrets; without a certificate the build produces unsigned installers. If macOS says the developer cannot be verified, allow the app in System Settings → Privacy & Security. If Windows SmartScreen warns about an unknown publisher, choose More info → Run anyway.

Windows and macOS installers have built-in auto-update: they check on launch, and you can also check, download and restart to install from Settings → About. Linux ships as a deb; update manually from Releases.

> **A note from Chii (・ω・)ノ**: launch the app after installation and Chii will settle into a corner of your desktop. Remember to allow microphone access before you first speak to her.

## 🖥️ Installation

| Platform | Install |
| --- | --- |
| macOS | Open the dmg and drag `Chobits LiveTalk` into Applications. Grant microphone access on first launch; the camera is optional and only used in device self-test. |
| Windows | Run the NSIS installer and follow the wizard. |
| Linux | Debian / Ubuntu: `sudo apt install ./Chobits-LiveTalk_<version>_linux_amd64.deb` (use `linux_arm64` on ARM64). Voice needs PipeWire / PulseAudio; the tray requires StatusNotifier / AppIndicator. |

## ℹ️ Notes

- **Source code**: for server and data security reasons, the LiveTalk client source code is not open-sourced at this time. We will consider open-sourcing it after completing a thorough security review; this repository only handles binary distribution, auto-update metadata and the landing page.
- **Out of the box**: the first launch connects to the Anime2Real official voice service by default; you can switch to the local mock, a local Pipecat sidecar, or your own gateway. Custom servers must be compatible with the Pipecat `raw_pcm` protocol.
- **Feedback**: please use the in-app feedback channel.
- **Auto-update files**: the `*.zip`, `*.blockmap` and `latest*.yml` assets in Releases are for auto-update; manual installation only needs the dmg / exe / deb listed above.

## 🛠️ For maintainers: release flow

1. Tag the source repository (for example `v0.3.4`) and keep the `version` in `package.json` in sync.
2. `release.yml` in the source repository runs automatically: it creates a draft Release here, builds installers for Linux x64 / ARM64, macOS arm64 / x64 and Windows x64, uploads them, and publishes the Release once all four platforms succeed.
3. `deploy.yml` builds `app/` on updates to `main` and deploys it to GitHub Pages.

Signing and notarization are configured through the source repository's Secrets; without a certificate the build produces unsigned installers.

<details>
<summary>Release secrets in the source repository</summary>

These secrets are configured in the Actions secrets of the private source repository `Chobits-Chii-LiveTalk`.

| Secret | Purpose |
| --- | --- |
| `RELEASE_REPO_TOKEN` | Fine-grained PAT for this repository (Contents: Read and write) used to create Releases and upload installers |
| `MAC_CSC_LINK` | macOS Developer ID certificate (base64 P12) |
| `MAC_CSC_KEY_PASSWORD` | macOS certificate password |
| `APPLE_ID` / `APPLE_APP_SPECIFIC_PASSWORD` / `APPLE_TEAM_ID` | macOS notarization |
| `WIN_CSC_LINK` | Windows code-signing certificate (base64 PFX) |
| `WIN_CSC_KEY_PASSWORD` | Windows certificate password |

</details>

## 📄 License

- **Landing page and workflows**: MIT, see [LICENSE](./LICENSE)
- **LiveTalk client source code**: not open-sourced at this time; we will consider open-sourcing it after a thorough security review
- **Live2D models / Cubism Core / character assets**: their own licenses, non-commercial use only, see [ASSETS.md](./ASSETS.md)
- **Third-party dependencies**: see the third-party table in [ASSETS.md](./ASSETS.md)

Chobits and Chii are copyright CLAMP and the respective rights holders; this is a non-commercial fan project.

## ⚠️ Disclaimer

- This project is intended for academic research and personal study only and claims no rights to the original work's copyright.
- Do not use this project or its generated content in ways that infringe the rights of CLAMP or the involved voice actors.
- This project is not affiliated with or authorized by CLAMP, Kodansha or Live2D Inc.
- The project will be taken down if the rights holders so request.

## 🙏 Related projects

- `Chobits-Chii-LiveTalk` — voice-first desktop companion source (private)
- `Chobits-Chii-Pipecat` — real-time voice pipeline (private)
- `Chobits-Chii-Mascot` — chat + desktop mascot client (private)
- `Chobits-Chii-Live2D` — Live2D models and motions (private)
- [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS) / [Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) — speech synthesis and speech recognition services
- `Chobits-Chii-LLM` — persona dialogue service (private)
- `Chobits-Chii-Resource` — shared family assets (private)

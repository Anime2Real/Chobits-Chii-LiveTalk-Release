<div align="center">
  <img src="app/src/assets/chii-logo.webp" alt="Chii" width="120" height="120" />
  <h1>Chobits-Chii-LiveTalk-Release</h1>
  <p><b>叽～</b> 小叽的语音优先桌面端 · 发布页与安装包分发</p>
  <p><code>Chobits-Chii-LiveTalk</code> 的用户侧发布出口：安装包、自动更新元数据，以及 <code>app/</code> 里的发布主页源码。发布页由 <b>GitHub Actions</b> 构建并部署到 <b>GitHub Pages</b>。出于服务器数据安全考虑，LiveTalk 客户端源码暂不公开，待完成完整安全评估后再考虑公开源码。</p>
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
    <a href="LICENSE"><img alt="License: PolyForm NC 1.0.0" src="https://img.shields.io/badge/License-PolyForm%20NC%201.0.0-orange.svg"></a>
  </p>
</div>

> 💖 如果这个项目对你有帮助，欢迎在 [GitHub](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release) 点个 Star —— 你的支持能让小叽被更多人听见！

> ⚠️ 注意：Chobits 及角色「小叽 / Chii」的版权归 CLAMP 及相关权利方所有。本仓库的发布页与 workflow 以 PolyForm Noncommercial 1.0.0 发布；LiveTalk 客户端源码暂不公开。Live2D 模型、Cubism Core 与角色素材仅限非商业使用，详见 [ASSETS.md](./ASSETS.md)。

`Chobits-Chii-LiveTalk` 是小叽家族的**语音优先桌面端**：透明、可置顶的 Live2D 角色窗，接上 Pipecat 实时语音管线，就能全双工对话、随时打断，并用口型回应你。它不做聊天记录、多会话和复杂插件，只专注「和角色说话」这一条路径。

本仓库是它的用户侧发布出口：GitHub Releases 承载各平台安装包与自动更新元数据，`app/` 是发布主页源码，由 GitHub Actions 构建后部署到 GitHub Pages。应用源码（`Chobits-Chii-LiveTalk`）与语音管线服务端（`Chobits-Chii-Pipecat`）暂不公开。

## ✨ 亮点

- **透明角色窗**：无边框、置顶、可拖动、鼠标穿透；关闭后隐藏到托盘，`Ctrl/Cmd+Shift+Space` 开始/结束对话，`Ctrl/Cmd+Shift+L` 显示/隐藏角色。
- **实时全双工语音**：16kHz PCM 上行、24kHz PCM 下行，Pipecat 负责 VAD / ASR / LLM / TTS，支持说话中打断。
- **Live2D 口型与视线**：消费 `lip_sync` 包络驱动口型；台词气泡可显示界面语言译文（简体中文 / 日本語 / English）。
- **开箱即用**：首次启动默认连接 Anime2Real 官方语音服务；也可切换到内置 mock、本地 Pipecat sidecar 或自建网关。
- **诊断与自检**：连接延迟、上下行帧数、断线重连状态、日志路径一目了然；麦克风 / 喇叭 / 摄像头可一键测试。
- **自动更新**：Windows / macOS 安装包内置 `electron-updater`；Linux 以 deb 分发，从 Releases 手动更新。

## 🗂️ 仓库构成

| 路径 | 内容 |
| --- | --- |
| `app/` | 发布主页源码（React + Vite + Tailwind），由 `deploy.yml` 构建并部署到 GitHub Pages |
| `.github/workflows/deploy.yml` | 构建 `app/` 并部署 GitHub Pages |
| `ASSETS.md` | Live2D / 角色素材与第三方许可说明 |
| `README*.md` | 简体中文 / 日本語 / English 三语说明 |

## 🌿 分支与标签

| 分支 / 标签 | 用途 |
| --- | --- |
| `main` | 唯一内容分支（默认）。发布页、`deploy.yml` 与三语 README 均以此为准 |
| `v*` | 发布标签，打在私有源码仓库；与 `package.json` 的 version 一致，触发源码仓库的 `release.yml` 构建并发布到本仓库 |

## ⬇️ 下载

发布主页（推荐）：

**https://anime2real.github.io/Chobits-Chii-LiveTalk-Release/**

页面会按平台列出最新安装包，也可以直接访问 [Releases](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases)：

| 平台 | 文件 |
| --- | --- |
| macOS Apple Silicon | `Chobits-LiveTalk_<version>_mac_arm64.dmg` |
| macOS Intel | `Chobits-LiveTalk_<version>_mac_x64.dmg` |
| Windows 10/11 x64 | `Chobits-LiveTalk_<version>_win_x64.exe` |
| Linux x64 | `Chobits-LiveTalk_<version>_linux_amd64.deb` |
| Linux ARM64 | `Chobits-LiveTalk_<version>_linux_arm64.deb` |

> 签名与公证由源码仓库 Secrets 配置；未配置证书时会产出未签名安装包。macOS 若提示「无法验证开发者」，请在「系统设置 → 隐私与安全性」中放行；Windows SmartScreen 提示未知发布者时，选择「更多信息 → 仍要运行」。

Windows / macOS 安装包内置自动更新：启动后会自动检查，也可在「设置 → 关于」手动检查、下载并重启安装。Linux 以 deb 分发，请从 Releases 手动更新。

> **小叽提示 (・ω・)ノ**：安装后启动，小叽就会住进你的桌面角落；第一次说话前记得允许麦克风。

## 🖥️ 安装提示

| 平台 | 安装 |
| --- | --- |
| macOS | 打开 dmg，把 `Chobits LiveTalk` 拖进 Applications。首次启动授予麦克风权限；摄像头为可选项，只在设备自检中使用。 |
| Windows | 运行 NSIS 安装包，按向导完成安装。 |
| Linux | Debian / Ubuntu：`sudo apt install ./Chobits-LiveTalk_<version>_linux_amd64.deb`（ARM64 换成 `linux_arm64`）。语音需要 PipeWire / PulseAudio；托盘依赖 StatusNotifier / AppIndicator。 |

## ℹ️ 说明

- **源码说明**：出于服务器数据安全考虑，LiveTalk 客户端源码暂不公开。待完成完整安全评估后，我们将考虑公开源码；本仓库只负责安装包分发、自动更新元数据与发布页。
- **开箱即用**：首次启动默认连接 Anime2Real 官方语音服务；也可以切换到本地 mock、本地 Pipecat sidecar 或自建网关。自建服务需要兼容 Pipecat `raw_pcm` 协议。
- **反馈渠道**：问题反馈请通过应用内渠道进行。
- **自动更新文件**：Releases 中的 `*.zip`、`*.blockmap` 与 `latest*.yml` 供自动更新使用；手动安装只需下载上表中的 dmg / exe / deb。

## 🛠️ 维护者：发布流程

1. 在源码仓库打 tag（例如 `v0.3.4`），并确保 `package.json` 的 `version` 一致。
2. 源码仓库的 `release.yml` 自动触发：先在本仓库创建草稿 Release，再构建 Linux x64 / ARM64、macOS arm64 / x64、Windows x64 安装包并上传；四个平台全部成功后发布 Release。
3. `deploy.yml` 在 `main` 更新后构建 `app/` 并部署到 GitHub Pages。

签名与公证通过源码仓库的 Secrets 配置；未配置时构建会产出未签名安装包。

<details>
<summary>源码仓库的发布相关 Secrets</summary>

以下 Secrets 配置在私有源码仓库 `Chobits-Chii-LiveTalk` 的 Actions secrets 中。

| Secret | 用途 |
| --- | --- |
| `RELEASE_REPO_TOKEN` | 本仓库的细粒度 PAT（Contents: Read and write），用于创建 Release 并上传安装包 |
| `MAC_CSC_LINK` | macOS Developer ID 证书（base64 P12） |
| `MAC_CSC_KEY_PASSWORD` | macOS 证书密码 |
| `APPLE_ID` / `APPLE_APP_SPECIFIC_PASSWORD` / `APPLE_TEAM_ID` | macOS 公证 |
| `WIN_CSC_LINK` | Windows 代码签名证书（base64 PFX） |
| `WIN_CSC_KEY_PASSWORD` | Windows 证书密码 |

</details>

## 📄 许可协议

本仓库采用「严格非商用 + 双授权」，**不是 OSI 开源**。

- **代码**：PolyForm Noncommercial 1.0.0，见 [LICENSE](./LICENSE)。
- **安装包 / 二进制**：遵循发布包内的 EULA 或各自许可；不在本仓库代码许可范围内。
- **商业使用**：公开许可不允许商业使用；如需商用，请通过 [COMMERCIAL.md](./COMMERCIAL.md) 联系。
- **历史版本**：此前版本的授权继续有效，见 [LICENSE-HISTORY.md](./LICENSE-HISTORY.md)。
- **第三方素材 / 角色 IP**：不适用上述许可，见 [ASSETS.md](./ASSETS.md) / [NOTICE](./NOTICE)。

## ⚠️ 免责声明

- 本项目仅用于学术研究与个人学习，不构成对原作品版权的任何主张。
- 不得将本项目或其生成内容用于侵犯 CLAMP 及相关声优权益的用途。
- 与 CLAMP、讲谈社、Live2D Inc. 无隶属或授权关系。
- 若权利方提出要求，本项目将被下架。

## 🙏 相关项目

- `Chobits-Chii-LiveTalk` — 语音优先桌面端源码（私有）
- `Chobits-Chii-Pipecat` — 实时语音管线（私有）
- `Chobits-Chii-Mascot` — 聊天 + 桌宠客户端（私有）
- `Chobits-Chii-Live2D` — Live2D 模型与动作（私有）
- [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS) / [Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) — 语音合成与语音识别服务
- `Chobits-Chii-LLM` — 人格对话服务（私有）
- `Chobits-Chii-Resource` — 家族共享素材（私有）

# Chobits-Chii-LiveTalk-Release

<p align="center">
  <img src="app/src/assets/chii-logo.webp" alt="Chii" width="120" height="120" />
</p>

<p align="center">
  <b>叽～</b> 小叽的语音桌面端发布页与安装包分发
</p>

<p align="center">
  <a href="https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/Anime2Real/Chobits-Chii-LiveTalk-Release" /></a>
  <img alt="Platform" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey" />
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg" /></a>
</p>

> 💖 如果这个项目对你有帮助，欢迎在 [GitHub](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release) 点个 Star。

本仓库是 **Chobits-Chii-LiveTalk** 的发布出口：承载安装包、自动更新元数据与发布主页源码（`app/`）。LiveTalk 源码在 [Chobits-Chii-LiveTalk](https://github.com/Anime2Real/Chobits-Chii-LiveTalk)，语音管线的服务端在 [Chobits-Chii-Pipecat](https://github.com/Anime2Real/Chobits-Chii-Pipecat)。

## ⬇️ 下载

发布主页（推荐）：

**https://anime2real.github.io/Chobits-Chii-LiveTalk-Release/**

也可以直接访问 [Releases](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases)：

| 平台 | 文件 |
| --- | --- |
| macOS Apple Silicon | `Chobits-LiveTalk_<version>_mac_arm64.dmg` |
| macOS Intel | `Chobits-LiveTalk_<version>_mac_x64.dmg` |
| Windows 10/11 | `Chobits-LiveTalk_<version>_win_x64.exe` |
| Linux x64 | `Chobits-LiveTalk_<version>_linux_x64.AppImage` / `.deb` |
| Linux ARM64 | `Chobits-LiveTalk_<version>_linux_arm64.AppImage` / `.deb` |

应用内置自动更新：安装后无需手动回到本页。自动更新读取本仓库的 GitHub Releases，`electron-updater` 会下载与当前平台匹配的包并在下次重启时安装。

## 📦 发布流程

1. 在源码仓库打 tag（例如 `v0.2.1`），并确保 `package.json` 的 `version` 与 tag 一致。
2. 在本仓库创建 GitHub Release，tag 使用同一个 `v0.2.1`，写好更新说明。
3. `.github/workflows/release.yml` 会按平台 checkout 源码、构建并上传安装包与 `latest*.yml` 更新元数据。
4. `.github/workflows/deploy.yml` 会把 `app/` 构建后部署到 GitHub Pages。

平台矩阵：Linux x64 / ARM64、macOS arm64 / x64、Windows x64。

### 签名与公证

在仓库 Secrets 中配置后，release workflow 会自动使用：

| Secret | 用途 |
| --- | --- |
| `SOURCE_REPO_TOKEN` | 源码仓库为私有时的只读 token；公开仓库可省略 |
| `MAC_CSC_LINK` | macOS Developer ID 证书（base64 P12） |
| `MAC_CSC_KEY_PASSWORD` | macOS 证书密码 |
| `APPLE_ID` / `APPLE_APP_SPECIFIC_PASSWORD` / `APPLE_TEAM_ID` | macOS 公证 |
| `WIN_CSC_LINK` | Windows 代码签名证书（base64 PFX） |
| `WIN_CSC_KEY_PASSWORD` | Windows 证书密码 |

`build/notarize.cjs` 在缺少 Apple 凭据时会跳过公证并继续构建；没有证书时会产出未签名安装包，适合内部测试，不适合正式分发。正式发布前请在 macOS 上验证 Gatekeeper、在 Windows 上验证 SmartScreen。

## 🧪 本地构建发布页

```bash
cd app
npm install
npm run dev
npm run build
```

发布页会从 GitHub API 读取本仓库最新 Release，按平台展示安装包；没有 Release 时显示“准备中”。

## 📄 许可

- **本仓库页面代码**：MIT，见 [LICENSE](./LICENSE)
- **LiveTalk 应用代码**：MIT，见源码仓库
- **Live2D 模型 / 角色素材 / Cubism Core**：各自许可，仅限非商业使用，见 [ASSETS.md](./ASSETS.md)
- Chobits 与小叽（Chii）版权归 CLAMP 及相关权利方所有；本项目为非商业同人项目

## 🙏 相关项目

- [Chobits-Chii-LiveTalk](https://github.com/Anime2Real/Chobits-Chii-LiveTalk) — 语音优先桌面端源码
- [Chobits-Chii-Pipecat](https://github.com/Anime2Real/Chobits-Chii-Pipecat) — 实时语音管线
- [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot) — 聊天 + 桌宠客户端
- [Chobits-Chii-Live2D](https://github.com/Anime2Real/Chobits-Chii-Live2D) — Live2D 模型与动作
- [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS) / [LLM](https://github.com/Anime2Real/Chobits-Chii-LLM) / [ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) — 语音与人格服务

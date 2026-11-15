<div align="center">
  <img src="app/src/assets/chii-logo.webp" alt="Chii" width="120" height="120" />
  <h1>Chobits-Chii-LiveTalk-Release</h1>
  <p><b>ちぃ～</b> ちぃの音声ファースト・デスクトップアプリ · 配布ページとインストーラー配信</p>
  <p><code>Chobits-Chii-LiveTalk</code> のユーザー向け配布窓口です。インストーラー、自動更新メタデータ、そして <code>app/</code> にある配布ページのソースを管理しています。配布ページは <b>GitHub Actions</b> でビルドされ、<b>GitHub Pages</b> にデプロイされます。サーバーおよびデータセキュリティ上の配慮により、LiveTalk クライアントのソースコードは現時点では公開しておりません。完全なセキュリティ評価を完了した後、公開を検討いたします。</p>
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

> 💖 このプロジェクトがお役に立ったら、ぜひ [GitHub](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release) で Star をお願いします —— あなたの応援が、ちぃの声をより多くの人に届けます！

> ⚠️ 注意：Chobits およびキャラクター「ちぃ / Chii」の著作権は CLAMP および関連権利者に帰属します。本リポジトリの配布ページと workflow は MIT ライセンスで公開されています。LiveTalk クライアントのソースコードは現時点では公開しておりません。Live2D モデル、Cubism Core、キャラクター素材は非商用利用に限定されます。詳細は [ASSETS.md](./ASSETS.md) をご覧ください。

`Chobits-Chii-LiveTalk` は、ちぃファミリーの**音声ファースト・デスクトップアプリ**です。透明で最前面に置ける Live2D キャラクターウィンドウと Pipecat のリアルタイム音声パイプラインを組み合わせ、全二重の会話、割り込み、リップシンク付きの応答を実現します。チャット履歴や複数セッション、複雑なプラグインはあえて搭載せず、「キャラクターと話す」という一本の道に集中しています。

本リポジトリは、そのユーザー向け配布窓口です。GitHub Releases で各プラットフォームのインストーラーと自動更新メタデータを配信し、`app/` には配布ページのソースがあります。配布ページは GitHub Actions でビルドされ、GitHub Pages にデプロイされます。アプリのソース（`Chobits-Chii-LiveTalk`）と音声パイプラインのサーバー（`Chobits-Chii-Pipecat`）は現時点では公開しておりません。

## ✨ 特徴

- **透明なキャラクターウィンドウ**：フレームなし、最前面、ドラッグ可能、マウス透過。閉じるとトレイに隠れ、`Ctrl/Cmd+Shift+Space` で会話の開始／終了、`Ctrl/Cmd+Shift+L` でキャラクターの表示／非表示を切り替えられます。
- **リアルタイム全二重音声**：16kHz PCM 上り、24kHz PCM 下り。VAD / ASR / LLM / TTS は Pipecat が担当し、会話中の割り込みにも対応します。
- **Live2D リップシンクと視線**：`lip_sync` エンベロープで口の動きを駆動。セリフの吹き出しには UI 言語（簡体中文 / 日本語 / English）の訳文を表示できます。
- **すぐ使える**：初回起動時は Anime2Real 公式音声サービスに接続。内蔵 mock、ローカル Pipecat sidecar、自前 gateway にも切り替えられます。
- **診断とセルフチェック**：接続遅延、上下フレーム数、再接続状態、ログの場所を表示。マイク / スピーカー / カメラをワンクリックでテストできます。
- **自動更新**：Windows / macOS 版は `electron-updater` 内蔵。Linux は deb 配布で、Releases から手動更新します。

## 🗂️ リポジトリ構成

| パス | 内容 |
| --- | --- |
| `app/` | 配布ページのソース（React + Vite + Tailwind）。`deploy.yml` がビルドして GitHub Pages にデプロイ |
| `.github/workflows/deploy.yml` | `app/` をビルドして GitHub Pages にデプロイ |
| `ASSETS.md` | Live2D / キャラクター素材とサードパーティのライセンス説明 |
| `README*.md` | 簡体中文 / 日本語 / English の 3 言語ドキュメント |

## 🌿 ブランチとタグ

| ブランチ / タグ | 用途 |
| --- | --- |
| `main` | 唯一の内容ブランチ（デフォルト）。配布ページ、`deploy.yml`、3 言語 README はすべてここで管理 |
| `v*` | 非公開ソースリポジトリに付けるリリースタグ。`package.json` の version と一致し、ソースリポジトリの `release.yml` が本リポジトリへビルド・公開 |

## ⬇️ ダウンロード

最新版は配布ページからのダウンロードをおすすめします：

**https://anime2real.github.io/Chobits-Chii-LiveTalk-Release/**

ページではプラットフォーム別に最新のインストーラーを一覧表示します。[Releases](https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases) から直接ダウンロードすることもできます：

| プラットフォーム | ファイル |
| --- | --- |
| macOS Apple Silicon | `Chobits-LiveTalk_<version>_mac_arm64.dmg` |
| macOS Intel | `Chobits-LiveTalk_<version>_mac_x64.dmg` |
| Windows 10/11 x64 | `Chobits-LiveTalk_<version>_win_x64.exe` |
| Linux x64 | `Chobits-LiveTalk_<version>_linux_amd64.deb` |
| Linux ARM64 | `Chobits-LiveTalk_<version>_linux_arm64.deb` |

> 署名・公証はソースリポジトリの Secrets で設定します。証明書が未設定の場合、未署名のインストーラーが生成されます。macOS で「開発元を確認できません」と表示された場合は「システム設定 → プライバシーとセキュリティ」で許可してください。Windows の SmartScreen で「不明な発行元」と表示された場合は「詳細情報 → 実行」を選んでください。

Windows / macOS 版には `electron-updater` が組み込まれています。起動後に自動で更新を確認し、「設定 → について」から手動で確認・ダウンロード・再起動インストールもできます。Linux は deb 配布のため、Releases から手動で更新してください。

> **ちぃからのお知らせ (・ω・)ノ**：インストール後に起動すると、ちぃがデスクトップの片隅に住み始めます。初めて話す前にマイクの許可を忘れずに。

## 🖥️ インストールのヒント

| プラットフォーム | インストール |
| --- | --- |
| macOS | dmg を開き、`Chobits LiveTalk` を Applications にドラッグ。初回起動時にマイクを許可してください。カメラは任意で、デバイス自己診断でのみ使用します。 |
| Windows | NSIS インストーラーを実行し、ウィザードに従います。 |
| Linux | Debian / Ubuntu：`sudo apt install ./Chobits-LiveTalk_<version>_linux_amd64.deb`（ARM64 は `linux_arm64`）。音声には PipeWire / PulseAudio が必要で、トレイは StatusNotifier / AppIndicator に依存します。 |

## ℹ️ 補足

- **ソースコード**：サーバーおよびデータセキュリティ上の配慮により、LiveTalk クライアントのソースコードは現時点では公開しておりません。完全なセキュリティ評価を完了した後、公開を検討いたします。本リポジトリはバイナリ配布、自動更新メタデータ、配布ページのみを担当します。
- **すぐ使える**：初回起動時は Anime2Real 公式音声サービスに接続します。ローカル mock、ローカル Pipecat sidecar、自前 gateway にも切り替え可能です。自前サーバーは Pipecat `raw_pcm` プロトコルに準拠する必要があります。
- **フィードバック**：アプリ内のフィードバック窓口をご利用ください。
- **自動更新ファイル**：Releases の `*.zip`、`*.blockmap`、`latest*.yml` は自動更新用です。手動インストールに必要なのは上表の dmg / exe / deb だけです。

## 🛠️ メンテナー向け：リリース手順

1. ソースリポジトリにタグ（例：`v0.3.4`）を付け、`package.json` の `version` と揃えます。
2. ソースリポジトリの `release.yml` が自動で実行されます：本リポジトリに草稿 Release を作成し、Linux x64 / ARM64、macOS arm64 / x64、Windows x64 のインストーラーをビルド・アップロードします。4 プラットフォームすべてが成功した後に Release を公開します。
3. `deploy.yml` が `main` の更新時に `app/` をビルドし、GitHub Pages にデプロイします。

署名・公証はソースリポジトリの Secrets で設定します。証明書がない場合、ビルドは未署名のインストーラーを生成します。

<details>
<summary>ソースリポジトリのリリース用 Secrets</summary>

以下の Secrets は、非公開ソースリポジトリ `Chobits-Chii-LiveTalk` の Actions secrets に設定します。

| Secret | 用途 |
| --- | --- |
| `RELEASE_REPO_TOKEN` | 本リポジトリ用の fine-grained PAT（Contents: Read and write）。Release の作成とインストーラーのアップロードに使用 |
| `MAC_CSC_LINK` | macOS Developer ID 証明書（base64 P12） |
| `MAC_CSC_KEY_PASSWORD` | macOS 証明書のパスワード |
| `APPLE_ID` / `APPLE_APP_SPECIFIC_PASSWORD` / `APPLE_TEAM_ID` | macOS 公証 |
| `WIN_CSC_LINK` | Windows コード署名証明書（base64 PFX） |
| `WIN_CSC_KEY_PASSWORD` | Windows 証明書のパスワード |

</details>

## 📄 ライセンス

- **配布ページと workflow**：MIT。[LICENSE](./LICENSE) を参照
- **LiveTalk クライアントのソースコード**：現時点では公開しておりません。完全なセキュリティ評価を完了した後、公開を検討いたします
- **Live2D モデル / Cubism Core / キャラクター素材**：それぞれのライセンスに従い、非商用利用に限定。[ASSETS.md](./ASSETS.md) を参照
- **サードパーティ依存**：ライセンス一覧は [ASSETS.md](./ASSETS.md) のサードパーティ表を参照

Chobits とちぃ（Chii）の著作権は CLAMP および関連権利者に帰属します。本プロジェクトは非商用の同人プロジェクトです。

## ⚠️ 免責事項

- 本プロジェクトは学術研究および個人の学習のみを目的としており、原作品の著作権について一切の主張を行いません。
- 本プロジェクトや生成コンテンツを、CLAMP および関連声優の権益を侵害する用途に使用しないでください。
- CLAMP、講談社、Live2D Inc. との提携・許諾関係はありません。
- 権利者からの要請があった場合、本プロジェクトは公開を取り下げます。

## 🙏 関連プロジェクト

- `Chobits-Chii-LiveTalk` — 音声ファースト・デスクトップアプリのソース（非公開）
- `Chobits-Chii-Pipecat` — リアルタイム音声パイプライン（非公開）
- `Chobits-Chii-Mascot` — チャット + デスクトップマスコットクライアント（非公開）
- `Chobits-Chii-Live2D` — Live2D モデルとモーション（非公開）
- [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS) / [Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) — 音声合成・音声認識サービス
- `Chobits-Chii-LLM` — 人格対話サービス（非公開）
- `Chobits-Chii-Resource` — ファミリー共通のアセット（非公開）

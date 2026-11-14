# Chobits-Chii-LiveTalk-Release

**Chobits-Chii-LiveTalk**（音声ファーストのちぃデスクトップアプリ）の配布ページとインストーラ置き場です。

- ダウンロードページ: https://anime2real.github.io/Chobits-Chii-LiveTalk-Release/
- Releases: https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases
- ソース: https://github.com/Anime2Real/Chobits-Chii-LiveTalk

アプリには `electron-updater` による自動更新が組み込まれています。インストール後は、このリポジトリの GitHub Releases から更新が配信されます。

## リリース手順

1. ソースリポジトリに `v0.2.1` のようなタグを付け、`package.json` の version と揃えます。
2. このリポジトリで同じタグの GitHub Release を作成します。
3. `release.yml` がソースを checkout し、Linux / macOS / Windows のインストーラと `latest*.yml` をビルド・アップロードします。
4. `deploy.yml` が `app/` をビルドして GitHub Pages にデプロイします。

署名・公証は Secrets（`MAC_CSC_LINK`、`APPLE_ID`、`WIN_CSC_LINK` など）で設定します。未設定の場合は未署名ビルドになります。

## ライセンス

ページのコードは MIT。Live2D モデル・キャラクター素材・Cubism Core は各自の非商用ライセンスに従います。詳細は [ASSETS.md](./ASSETS.md)。Chobits / ちぃ © CLAMP。

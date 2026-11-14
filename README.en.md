# Chobits-Chii-LiveTalk-Release

Release channel and landing page for **Chobits-Chii-LiveTalk**, a voice-first Chii desktop companion.

- Download page: https://anime2real.github.io/Chobits-Chii-LiveTalk-Release/
- Releases: https://github.com/Anime2Real/Chobits-Chii-LiveTalk-Release/releases
- Source: https://github.com/Anime2Real/Chobits-Chii-LiveTalk

The app ships with auto-update via `electron-updater`; install once and updates are delivered through this repository's GitHub Releases.

## Release flow

1. Tag the source repo (`v0.2.1`) with a matching `package.json` version.
2. Publish a GitHub Release in this repo with the same tag.
3. `release.yml` checks out the source, builds Linux/macOS/Windows installers, and uploads them plus `latest*.yml` metadata.
4. `deploy.yml` builds `app/` and deploys the landing page to GitHub Pages.

Code signing/notarization use repository secrets: `MAC_CSC_LINK`, `MAC_CSC_KEY_PASSWORD`, `APPLE_ID`, `APPLE_APP_SPECIFIC_PASSWORD`, `APPLE_TEAM_ID`, `WIN_CSC_LINK`, `WIN_CSC_KEY_PASSWORD`, and optional `SOURCE_REPO_TOKEN`.

## License

Page code is MIT. Live2D models, character assets and Cubism Core keep their own non-commercial terms; see [ASSETS.md](./ASSETS.md). Chobits/Chii © CLAMP.

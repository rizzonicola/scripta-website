# Scripta Website

Landing page and download hub for [Scripta](https://github.com/rizzonicola/Scripta), the open-source, local-first Markdown note-taking app.

Static site: plain HTML, CSS and JavaScript. No build step, no dependencies.

## Features

- Detects the visitor's OS and architecture and shows a single **Download** button
- Reads the latest release from the GitHub API, with direct `releases/latest/download/` links as fallback
- Install guides for iOS (sideloading), Linux (Flatpak), Android, Windows and macOS
- All files with size and SHA-256, plus previous releases
- Italian, English and French, with dark, light and high-contrast themes
- GDPR cookie and privacy banner (only strictly necessary storage by default)

## Files

| File | Purpose |
|:---|:---|
| `index.html` | Page markup |
| `style.css` | Styles and themes |
| `script.js` | OS detection, releases, translations, settings |

Icons live in `assets/icons/` (SVG favicon, PNG 16-512, Apple touch, maskable), plus `favicon.ico` and `site.webmanifest` in the root.

An all-in-one `index.html` (CSS and JS inlined) is also provided.

## Deploy

Serve the folder from any static host: GitHub Pages, Cloudflare Pages, Netlify, or your own server. To test locally:

```bash
python3 -m http.server 8000
```

## Release asset names

The download button expects these names on the latest GitHub release:

`Scripta-universal.apk` · `Scripta-arm64-v8a.apk` · `Scripta-armeabi-v7a.apk` · `Scripta-x86_64.apk` · `Scripta-ios-unsigned.ipa` · `Scripta-macos-universal.dmg` · `Scripta-windows-x64-setup.exe` · `Scripta-windows-arm64-setup.exe` · `Scripta.flatpak`

If you rename assets, update `sf()` and `pick()` in `script.js`.

## Fewer GitHub API calls

`.github/workflows/update-releases.yml` rewrites a `releases.json` file in this repo when Scripta publishes a new release (after all builds finish) and when the workflow file itself is edited. The page reads that file first and only falls back to the GitHub API if it is missing. For the first run use **Actions → Update releases.json → Run workflow**.

## Notes

- The GitHub API allows 60 unauthenticated requests per hour per IP. When it fails, the page falls back to direct download links.
- Update the privacy text in the banner if your hosting or CDN setup changes.

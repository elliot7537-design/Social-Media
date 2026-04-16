# Social-Media

A self-contained 1080×1080 animated reel for showcasing web-design work on
Instagram, Facebook, and LinkedIn feeds. Pure HTML + CSS + a tiny bit of JS —
no build tools, no dependencies.

## Run it

Open `index.html` in Chrome or Safari. The animation starts immediately and
loops every 16 seconds. Resize the window — the square stage stays centered.

## Scenes (~16s loop)

1. **0:00–0:03** — Title card: "WEB / *Design* / THAT MOVES."
2. **0:03–0:07** — Desktop browser mockup scrolls through a fake landing page.
3. **0:07–0:11** — Two phone mockups parallax in with pricing + profile UIs.
4. **0:11–0:14** — Kinetic 3×3 type grid (DESIGN / BRAND / MOTION / …).
5. **0:14–0:16** — Outro CTA: `@YOUR-HANDLE` + "LET'S BUILD →".

## Keyboard

| Key     | Action                                     |
| ------- | ------------------------------------------ |
| `R`     | Toggle the on-screen frame + hint (record mode). |
| `Space` | Pause / resume the animation.              |
| `F`     | Toggle browser fullscreen.                 |

## Record it for social

1. Press `F` for fullscreen, then `R` to hide the hint.
2. **macOS:** `Cmd+Shift+5` → *Record Selected Portion* → draw tight around
   the square stage → record one full loop (~16s) → trim in QuickTime.
3. **Windows/Linux:** use OBS with a cropped capture of the square area.
4. Export MP4, upload to your feed of choice.

## Customize

All colors, type, and copy live in clearly labeled spots:

- **Colors** — `:root` in `styles.css` (`--paper`, `--ink`, `--accent`).
- **Title copy** — `.title-word` spans in `index.html` (scene 1).
- **Handle / CTA** — `.handle` + `.outro-cta` in `index.html` (scene 5).
- **Real screenshots** — replace `.browser-scroll` children (scene 2) and
  `.phone-screen` children (scene 3) with your own `<img>` tags.
- **Kinetic grid words** — `.type-cell` contents in `index.html` (scene 4).

To make a longer or slower version, change `--duration` in `styles.css` and
update the scene-window percentages in the keyframes accordingly.

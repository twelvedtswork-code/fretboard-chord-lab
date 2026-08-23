# Fretboard Chord Lab

A self-contained guitar chord atlas and practice machine in a single HTML file:

- **Chords** — 288 chords (24 qualities from major to m7♭5, dim7, 6/9, 13th, and 7♯9), nearly 4,000 voicings: CAGED movable shapes, close and spread triad inversions on every string set, drop-2 inversions for 4-note chords, plus a 24-fret whole-neck chord-tone map. Toggle every diagram between note names and intervals; tap ♪ to hear any voicing.
- **Keys** — diatonic triad and 7th-chord families for every major and natural-minor key, with a progression trainer that computes smallest-movement voice-led paths through the inversions.
- **Drill** — recall flash-cards: it prompts a chord/inversion, you grab it on the guitar, reveal, self-grade. Misses go into a review queue that keeps resurfacing.
- **Practice** — a metronome scheduled on the Web Audio hardware clock (sub-millisecond jitter) with tap tempo, plus a one-minute-changes counter with history.

**Live app:** https://twelvedtswork-code.github.io/fretboard-chord-lab/

Install on a phone: open the link, then **Install app** (Android Chrome) or **Share → Add to Home Screen** (iOS). Works offline after the first load. No build step, no dependencies — the app is `index.html`.

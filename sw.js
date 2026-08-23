/* Fretboard Chord Lab — offline service worker.
   Navigations: network-first (updates land on next open), cache fallback (offline).
   Assets (icons, fonts): cache-first with runtime fill. */
const CACHE = 'fcl-v1';
const CORE = ['.', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(r => {
        const cp = r.clone();
        caches.open(CACHE).then(c => c.put('index.html', cp));
        return r;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      if (r.ok || r.type === 'opaque') {
        const cp = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, cp));
      }
      return r;
    }))
  );
});

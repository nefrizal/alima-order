// Service worker minimal — hanya untuk memenuhi syarat "Installable" PWA di Android.
// Tidak melakukan caching agresif, supaya data order selalu fresh dari jaringan.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Pass-through langsung ke jaringan (no offline cache) — app ini butuh data live dari Google Sheets.
  e.respondWith(fetch(e.request).catch(() => new Response('Offline — sambungkan internet dulu.', { status: 503 })));
});

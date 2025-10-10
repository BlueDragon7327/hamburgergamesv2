const CACHE_NAME = 'offline-games-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './games.html',
  './games/poorbunny.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});




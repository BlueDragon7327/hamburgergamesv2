const CACHE_NAME = 'offline-games-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './games.html',
  './games/poorbunny.html'
];

// install event
self.addEventListener('install', e => {
  e.waitUntil(
    // delete old caches first
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => caches.delete(cache))
      );
    }).then(() => {
      // then open new cache and add files
      return caches.open(CACHE_NAME).then(c => c.addAll(URLS_TO_CACHE));
    })
  );
  self.skipWaiting(); // activate new SW immediately
});

// activate event
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// fetch event
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('edupilot-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'math.html',
        'science.html',
        'language.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

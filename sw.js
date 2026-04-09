var CACHE_NAME = 'nutri-kids-v1';
var urlsToCache = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function(e) { e.waitUntil(caches.open(CACHE_NAME).then(function(c) { return c.addAll(urlsToCache) })); self.skipWaiting() });
self.addEventListener('activate', function(e) { e.waitUntil(caches.keys().then(function(n) { return Promise.all(n.filter(function(k) { return k !== CACHE_NAME }).map(function(k) { return caches.delete(k) })) })); self.clients.claim() });
self.addEventListener('fetch', function(e) { e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request) })) });

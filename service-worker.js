importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {strategies} = workbox;

const CACHE_FIRST_DELETE="cache-first-v0007"
const CACHE_FIRST_CURRENT="cache-first-v0008"

deleteOldCaches = function () {
	caches.keys().then(cacheNames => {
		cacheNames.forEach(cacheName => {
			console.log(`cacheName: ${cacheName}`)
			if (CACHE_FIRST_DELETE === cacheName) {
				console.log(`deleting: ${cacheName}`)
				caches.delete(cacheName);
			}
		});
	});
}
self.addEventListener('fetch', (event) => {
	if (event.request.url.endsWith('cache-first.html')) {
		deleteOldCaches()
		console.log(`CacheFirst intercepted: ${event.request.url}`)
		const cache = new strategies.CacheFirst({cacheName:CACHE_FIRST_CURRENT});
		event.respondWith(cache.handle({request: event.request}));
	}
	else if (event.request.url.endsWith('cache-stale.html')) {
		console.log(`StaleWhileRevalidate intercepted: ${event.request.url}`)
		const cache = new strategies.StaleWhileRevalidate();
		event.respondWith(cache.handle({request: event.request}));

	}
	else if (event.request.url.endsWith('cache-network.html')) {
		console.log(`StaleWhileRevalidate intercepted: ${event.request.url}`)
		const cache = new strategies.NetworkFirst();
		event.respondWith(cache.handle({request: event.request}));
	}
});

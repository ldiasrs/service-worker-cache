importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js')
// Note: Ignore the error that Glitch raises about workbox being undefined.
workbox.setConfig({
	debug: true,
})
// To avoid async issues, we load strategies before we call it in the event listener
workbox.loadModule('workbox-core')
workbox.loadModule('workbox-routing')
workbox.loadModule('workbox-cacheable-response')
workbox.loadModule('workbox-strategies')
workbox.loadModule('workbox-expiration')

const cacheNames = workbox.core.cacheNames
const { registerRoute, setCatchHandler, setDefaultHandler } = workbox.routing
const { CacheableResponsePlugin } = workbox.cacheableResponse
const {
	NetworkFirst,
	StaleWhileRevalidate,
	CacheFirst,
} = workbox.strategies
const { ExpirationPlugin } = workbox.expiration

const cacheName = cacheNames.runtime

registerRoute(
	new RegExp('.*cache-first.html'),
	new CacheFirst()
);
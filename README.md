# Node Service Worker Demo
- Setup a Service Worker using Workbox
- Expose 3 pages of different cache strategies
- Show configuration of using these caches

Setting up the server
=====================
- install dependencies
  - `npm install`
- run server
  - `npm start`

Validating 
=====================
- Open browser and hit the bellow URLs
- See the Load Network behavior for each page on Console->Network
- See the Service Worker behavior on Applications-->Service Worker
- See the Cache files behavior on Applications-->Cache

*URLS*
- http://localhost:8080/no-cache.html
- http://localhost:8080/cache-stale.html
- http://localhost:8080/cache-first.html
- http://localhost:8080/cache-network.html

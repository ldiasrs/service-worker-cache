const express = require('express')
const http = require('http')
const fs= require('fs')

const app = express();

app.use(express.static('./'));

app.get('/no-cache.html', (req, res) => {
	res.send(responseBody(req.url, 'No Cache'));
});
app.get('/cache-stale.html', (req, res) => {
	res.send(responseBody(req.url, 'Stale Cache'));
});
app.get('/cache-first.html', (req, res) => {
	res.send(responseBody(req.url, 'Cache First'));
});
app.get('/cache-network.html', (req, res) => {
	res.send(responseBody(req.url, 'Map URL'));
});
app.get('/map-url.html', (req, res) => {
	res.send(responseBody(req.url, 'Map URL'));
});

function responseBody(url, text) {
	console.log(`Serving URL:${url}`)
	const template_html = fs.readFileSync('index.html', 'utf8');
	const html = template_html.replace('{guide}', `<h1>${text}</h1>`)
	return html
}


http.createServer(app).listen(8080);
console.log('https server running on https://localhost:8080');
console.log('Open pages and verify the cache behavior:\n');
console.log('http://localhost:8080/no-cache.html');
console.log('http://localhost:8080/cache-first.html');
console.log('http://localhost:8080/cache-stale.html');
console.log('http://localhost:8080/cache-network.html');

const express = require('express');
const morgan = require('morgan');
const { build, Nuxt } = require('nuxt');
require('dotenv').config();
const nuxtConfig = require('../nuxt.config');
nuxtConfig.server.port = process.env.PORT;
const app = express();

app.use(morgan());
async function initNuxt() {
	const nuxt = await new Nuxt();
	app.use(nuxt.render);

	build(nuxt);
}

app.listen(4200, () =>
	console.log('loud and clear!')
);

app.get('/test', (req, res) => {
	res.end('OwO');
});

initNuxt();
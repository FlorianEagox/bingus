const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helment = require('helmet');
const { Nuxt, Builder } = require('nuxt');
const nuxtConfig = require('../client/nuxt.config');
require('dotenv').config();


nuxtConfig.dev = process.env.NODE_ENV !== 'production';
nuxtConfig.srcDir = 'client';
nuxtConfig.buildDir = 'client/.nuxt';

const app = express();

app.use(morgan('dev'));
app.use(helment());
app.use(cors());

async function initNuxt() { // Set up to deploy the nuxt frontend
	const nuxt = new Nuxt(nuxtConfig);

	if (nuxtConfig.dev)
		await new Builder(nuxt).build();
	else
		await nuxt.ready();

	app.use(nuxt.render);
}

app.listen(process.env.PORT | 4200, () =>
	console.log(`listening on ${process.env.PORT | 4200}`)
);

initNuxt();

app.get('/test', (req, res) => {
	res.end('OwO');
});

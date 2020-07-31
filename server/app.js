const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helment = require('helmet');
const dotenv = require('dotenv');
const subdomain = require('express-subdomain');
const nuxtConfig = require('../client/nuxt.config');
const { Nuxt, Builder } = require('nuxt');

dotenv.config();
nuxtConfig.dev = process.env.NODE_ENV !== 'production';
nuxtConfig.srcDir = 'client';
nuxtConfig.buildDir = 'client/.nuxt';

const app = express();

app.use(morgan('dev'));
app.use(helment());
app.use(cors());

const apiRouter = express.Router()
app.use(subdomain('api', apiRouter));


async function initNuxt() { // Set up to deploy the nuxt frontend
	const nuxt = new Nuxt(nuxtConfig);

	if (nuxtConfig.dev)
		await new Builder(nuxt).build();
	else
		await nuxt.ready();

	app.use(nuxt.render);
}

app.listen(process.env.PORT || 4200, () =>
	console.log(`listening on ${process.env.PORT || 4200}`)
);

initNuxt();

apiRouter.get('/', (req, res) => {
	res.send('ayyyyyy');
});

app.get('/test', (req, res) => {
	console.log('bah', app._router.stack);
	res.send('bye');
});

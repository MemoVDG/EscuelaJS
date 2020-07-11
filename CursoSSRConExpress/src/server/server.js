import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { StaticRouter } from 'react-router-dom';
import reducer from '../frontend/reducers';
import intialState from '../frontend/intialState';
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../frontend/routes/serverRoutes';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
	console.log('Development config');
	const webpackConfig = require('../../webpack.config');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const compiler = webpack(webpackConfig);
	const serverConfig = {
		port: PORT,
		hot: true,
	};
}

const setResponse = (html, preloadedState) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="assets/app.css" type="text/css">
            <title>VdO</title>
        </head>
        <body>
						<div id="app">${html}</div>
						<script>
          			window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        		</script>``
            <script src="assets/app.js" type="text/javascript">
            </script>
        </body>
    </html>
    `;
};

const renderApp = (req, res) => {
	const store = createStore(reducer, intialState);
	const preloadedState = store.getState();
	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} context={{}}>
				{renderRoutes(serverRoutes)}
			</StaticRouter>
		</Provider>
	);

	res.send(setResponse(html, preloadedState));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Listen on port 3000');
	}
});

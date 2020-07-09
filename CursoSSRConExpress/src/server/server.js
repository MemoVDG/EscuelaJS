import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack'
import React from 'react';
import ReactDom from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, compose} from 'redux';
import {StaticRouter} from 'react-router-dom'
import reducer from '../frontend/reducers';
import intialState from '../frontend/intialState';

dotenv.config();
const {ENV, PORT} = process.env;

const app = express();

if(ENV === 'development'){
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

app.get('*', (req, res) => {
    res.send(
        `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="assets/app.css" type="text/css">
            <title>VdO</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="assets/app.js" type="text/javascript">
            </script>
        </body>
    </html>
    `
    );
});

app.listen(PORT, (err) => {
    if (err){
        console.log(err)
    }else {
        console.log('Listen on port 3000')
    }
});
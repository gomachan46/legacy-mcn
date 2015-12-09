// This file is used by the webpack HMR dev server to load your component without using Rails
// It should simply match routes to basic HTML or jade files that render your component
/* eslint-disable no-console, func-names, no-var */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var jade = require('jade');
var config = require('./webpack.client.hot.config');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        hash: false,
        version: false,
        chunks: false,
        children: false
    }
});

server.app.use('/', function (req, res) {
    var layout = process.cwd() + '/index.jade';
    var html = jade.compileFile(layout, {pretty: true})();
    res.send(html);
});

server.listen(4000, 'localhost', function (err) {
    if (err) console.log(err);
    console.log('Listening at localhost:4000...');
});

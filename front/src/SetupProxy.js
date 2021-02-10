const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/getLotto', {
            target: 'http://192.168.2.88:3001/',
            changeOrigin: true
        })
    )
};
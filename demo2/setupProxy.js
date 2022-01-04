const {createProxyMiddleware} = require('http-proxy-middleware') 
module.exports = function (app) {
    app.use(createProxyMiddleware('/api1', {
        target: 'http://localhost:5000',
        changeOrigin: true,//设置允许跨域
        pathRewrite: { '^/api1': ''}//因为后端接口没有api前缀，所以这里重写（去掉前缀/api）
    }))
}

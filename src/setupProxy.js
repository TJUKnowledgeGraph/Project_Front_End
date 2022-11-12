const createProxyMiddleware = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware('/api',
        {
            target: "http://192.168.1.137:8080/",
            changeOrigin:true,
            pathRewrite: {
                "^/api": "/"
            },
            "secure":false  //如果访问的是https类的链接，就需要设置为true
        }))
}
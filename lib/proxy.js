/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/29
 */
'use strict';

let http = require('http'),
    httpProxy = require('http-proxy');
let proxy = httpProxy.createProxyServer({});
let parseFile = require('./parse');

/**
 *
 * @param port 映射为本地端口
 * @param fileName 配置文件地址
 */

module.exports = function(port, fileName){
    let hosts = parseFile(fileName);
    let server = http.createServer(function(req, res) {
        console.log('port', req.headers);
        let port = hosts && hosts[req.headers.host] && hosts[req.headers.host][2] || 9002;
        /* flag X-MAN */
        res.setHeader('X-MAN', '^_^');
        proxy.web(req, res, {
            target: `http://127.0.0.1:${port}`
        });
        console.log('X-MAN ', new Date().toLocaleString());
    });
    server.listen(port);
};
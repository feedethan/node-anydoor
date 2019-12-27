const http = require('http');
const path = require('path');
const conf = require('./src/config/index');
const chalk = require('chalk');
const route = require('./src/helper/route');
// const openUrl = require('./src/helper/openUrl');

const server = http.createServer((req,res)=>{
    // 获取当前url路径
    const {url} = req;
    const filePath = path.join(conf.root, url);
    route(req,res,filePath);
});

server.listen(conf.port,conf.hostname,()=>{
    const addr = `http://${conf.hostname}:${conf.port}`;  
    console.info(`Server is runing at ${chalk.green(addr)}`);
    // openUrl(addr);
});
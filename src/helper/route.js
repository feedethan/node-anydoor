
const fs = require('fs');
const {promisify} = require('util');
const mime = require('./mime');
const compress = require('./compress');
const config = require('../config/index');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
/**
 * 根据filepath判断 对文件和文件夹做不同的处理
 */
module.exports = async (req,res,filePath) =>{
    try{
        // 返回一个fs.Stats 对象
        const stats = await stat(filePath);
        // 判断它是文件还是文件夹
        if(stats.isFile()){
            res.statusCode = 200;
            const contentType = mime(filePath);
            res.setHeader('Content-Type', contentType);
            // fs.readFile(filePath, (err,data)=>{
            //     res.end(data);
            // }); // 速度慢 一次读取全部
            let rs =fs.createReadStream(filePath);
            // 对符合条件的文件压缩
            if(filePath.match(config.compress)){
                rs = compress(rs, req, res);
            }
            rs.pipe(res);
        }else if(stats.isDirectory()){
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(files.join(','));
        }
    }catch(ex){
        console.error(ex);
        res.statusCode=404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${filePath} is not a file or directory!`);
        return;
    }
};
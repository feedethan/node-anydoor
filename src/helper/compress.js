const {createGzip, createDeflate} = require('zlib');
/**
 * 根据浏览器支持的accept-encoding 
 * 设置不同的header并返回压缩流
 */
module.exports = (rs, req, res)=>{
    console.info(req.headers['range']);
    const acceptEncoding = req.headers['accept-encoding'];
    if(!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)){
        return rs;
    }else if(acceptEncoding.match(/\bgzip\b/)){
        res.setHeader('Content-Encoding','gzip');
        return rs.pipe(createGzip());
    }else if(acceptEncoding.match(/\deflate\b/)){
        res.setHeader('Content-Encoding','deflate');
        return rs.pipe(createDeflate());
    }
};

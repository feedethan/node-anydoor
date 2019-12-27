const path = require('path');
// 根据文件扩展名返回相应的content type
const mimeTypes = {
    'css': 'text/css',
    'gif': 'image/gif',
    'html':'text/html',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpg',
    'js': 'text/javascript',
    'json': 'application/json',
    'pdf': 'application/pdf',
    'png': 'image/png',
    'txt': 'text/plain',
    'xml': 'text/xml',
};

module.exports = (filePath)=>{
    // 返回 path 的扩展名
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if(!ext){
        ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes['txt'];
};
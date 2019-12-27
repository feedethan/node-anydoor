const {exec} = require('child_process');
/**
 * 判断平台 执行不同的命令打开url
 */
module.exports = url => {
    switch(process.platform){
    case 'darwin':
        exec(`open ${url}`);
        break;
    case 'win32':
        exec(`start ${url}`);
        break;
    default:
        break;
    }
};
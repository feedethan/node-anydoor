# anydoor
nodejs static web server
## install
sudo cnpm i supervisor -g  自动重启
npm init
eslint --init
cnpm i --save-dev eslint babel-eslint pre-commit
eslint .   校验所有文件
eslint --fix 修复文件
## start
supervisor app.js || nodemon app.js
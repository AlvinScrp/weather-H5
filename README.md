# weather-h5

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


# nginx

## conf位置:
vim /usr/local/etc/nginx/nginx.conf
## 设置全局配置指令
nginx -g /usr/local/etc/nginx/nginx.conf

## 检查Nginx配置文件是否正确命令：
 ./nginx -t

指定检测特定Nginx配置文件：-c表示configuration，指定配置文件
./nginx -t -c /usr/local/etc/nginx/nginx.conf

## Nginx服务器指定启动配置文件命令：
./nginx -c /usr/local/etc/nginx/nginx.conf
## 暴力停止Nginx服务器命令：
./nginx -s stop
## 优雅停止Nginx服务器命令：
./nginx -s quit
## Nginx重新加载配置文件命令：
./nginx -s reload

## Nginx重启
nginx -s reopen 


# pm2
## 重启服务
pm2 restart coverage-server

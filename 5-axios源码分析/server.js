//使用 express
const express = require("express");
const fs = require("fs");

//创建应用对象
const app = express();

//创建路由规则
app.get("/page", (request, response) => {
    response.sendFile(__dirname + "/4-axios模拟封装.html");
});

app.all("/server", (request, response) => {
    //设置 cors
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    // response.end("服务器端的数据");
    response.end('{"test": "服务器端的数据"}');
});

app.all("/users", (request, response) => {
    //设置 cors
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    // response.end("服务器端的数据");
    response.end('{"test": "服务器端的数据users"}');
});

app.all("/goods", (request, response) => {
    //设置 cors
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    // response.end("服务器端的数据");
    response.end('{"test": "服务器端的数据goods"}');
});

//延时服务
app.all("/delay-server", (request, response) => {
    //返回 data.json 的文件数据
    //设置 cors
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    setTimeout(() => {
        response.end('{"test": "服务器端的数据"}');
    }, 2000);
});

//启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});
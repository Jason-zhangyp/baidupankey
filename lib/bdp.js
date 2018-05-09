#!/usr/bin/env node
"use strict";
var bdp = require("./baidupan"), boxen = require("boxen"), colors = require("colors"),
    argv = require("yargs").usage("Usage: bdp [url]").example("bdp -u 百度网盘链接", "").option("u", {
        alias: "url",
        describe: "要查询的百度网盘链接",
        demandOption: !0,
        type: "string"
    }).alias("h", "help").alias("v", "version").help().epilog("版权:http://pnote.net".cyan.bold).argv;
bdp.getBaiduPan(argv.u).then(function (e) {
    e.status ? console.log(boxen("链接:  ".cyan + e.access_url + "\n\n" + "密码:  ".cyan + "x69a".rainbow.bold, {
        padding: 1,
        margin: 1,
        borderStyle: "double"
    })) : console.log("没有找到提取码".yellow)
}).catch(function (e) {
    return console.log(e.magenta)
});
// 引入node这种的express框架
const express = require("express");

// 引入node自带的path模块
const path = require("path");

// 创建app对象
const app = express();

// 创建静态资源目录
app.use(express.static(path.join(__dirname, "public")));

//  引入body.parse模块
var bodyParser = require("body-parser");

//  创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));

// 指定服务器的端口号为3000
app.listen(3000);

//创建get01路由
app.get("/get01", function (req, res) {
  var obj = {};
  obj.code = 200;
  obj.message = "成功";
  obj.data = req.query;
  res.send(obj);
});

// 创建post01路由
app.post("/post01",function( req, res ){
    var obj = {};
    obj.code = 200;
    obj.message = "成功";
    obj.data = req.body;
    res.send( obj );
});
// 创建get03路由
app.get("/get03", function (req, res) {
  var obj = {};
  obj.status = 1000;
  obj.desc = "OK";
  obj.data = req.query;
  res.send(obj);
});

// 创建post03路由
app.post("/post03", function (req, res) {
  var obj = {};
  obj.code = 200;
  obj.message = "获取数据成功";
  obj.data = req.body;
  res.send(obj);
});

// 创建getAjax01路由
app.get("/getAjax01",function(req,res){

});

// 创建postAjax01路由
app.post("/postAjax01",function(req,res){

});

// 创建getAjax02路由
app.get("/getAjax02",function(req,res){

});

// 创建postAjax02路由
app.post("/postAjax02",function(req,res){

});

// 创建postAjax03路由
app.post(".postAjax03",function(req,res){

});
// 控制输出提示信息
console.log("恭喜你,服务器启动成功!!!");

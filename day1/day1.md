# node

- 安装[node](https://nodejs.org/zh-cn/)环境
- `npm install gulp`
- 写一份**gulpfile.js**配置gulp的参数
- gulp命令执行js来完成代码处理（压缩，重命名）


# install

如果没有安装的node环境去[node官网](https://nodejs.org/zh-cn/)安装维护版本

查看版本号，在cmd中执行，

```bash
node -v
```

# introduce

Node.js®是一个基于`Chrome V8`引擎的JavaScript运行时

### 前端（浏览器端）

> 要运行JS，必须借助于HTML文件，没有HTML文件和浏览器环境，那JS是无法运行     （要有HTML文件，也要有浏览器环境）
> 浏览器=界面+控制台
> JS是必须运行在浏览器上，所以只能控制浏览器


### 后端（服务器端）

> 要运行JS，（既不需要HTML文件，也不需要浏览器环境，只需要Node环境），node替代了HTML文件，也替代了浏览器
> 服务器(node)=控制台
> JS有了node环境，可以运行在非浏览器环境下，因为node是装在系统上，所以JS可以操作系统
node(浏览器的控制台===chrome的V8引擎)<浏览器

# 运行

如何使用node

- 写一份JS代码
- 在命令行定位到此代码的位置，运行命令`node JS文件的名字.js`


# 模块化


# 自定义模块化

### 前端

- 写多条`<script>引入JS`在html分开引入
- 利用`require.js`
```html
<script src="jquery.js"></script>
<script src="cookie.js"></script>
<script src="module.js"></script>
```

### node（后端）

它没有html，所以需要借助于两个JS方法

导出，借助于`module.exports`
```js
function plus(a, b) {
	return a + b
}

function sub(a,b){
	return a-b
}

module.exports = {
	plus,
	sub
}
```

导入,借助于`require`,建议用相对路径
```js
var tool = require("./plus.js");
```

# 内置模块

不需要自己写，就是node环境自带，它自己写好给你的，就可以引入

Node拿来作为PHP的一种替代（多一种可选的方案）

PHP能做的，Node也能做


|模块|名字|
|-|-|
|读写文件|fs|
|创建服务器|http|
|查看系统|os|
|压缩文件|zip|
|...|...|

其他模块参考 [node官网内置模块API文档](https://nodejs.org/dist/latest-v8.x/docs/api/)

# 第三方模块
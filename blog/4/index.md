---
title: 基于 vscode 开发 javascript 项目
date: 2024-06-09
---

好久不开发 javascript 项目，一开始开发就要到处找怎么配置环境。这里做一下记录，不再到处找了。

## nodejs

nodejs 是一个 JavaScript 运行环境，除了基于 v8 引擎运行 JavaScript 外，还提供了许多基础的库，比如文件访问、多线程处理、环境变量等。

## npm

npm 是流行的包管理工具，下面是它的初始化的配置文件 package.json（下文中提到配置文件，文件位置默认就在项目根目录）：

```json
{
  "name": "testproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {}
}
```

main 是指示软件执行的入口文件，type 是使用哪种 javascript 组件化标准。在 script 里面进行相应的配置可以通过 npm 来启动。比如增加一行：

```text
"start": "tsc && node dist/index.js"
```

就可以通过下面的命令来进行启动：

```shell
npm run start
```

## typescript

typescript 是一个流行的给 javascript 加上类型的工具，加上类型，便于编写大型软件，减少错误。使用 typescript，就不是在写 js 类型的文件了，而是在写 ts 文件。typescript 提供了编译器，将 ts 文件编译成 js 文件，所以与现有的 js 环境兼容。为了使用 typescript，需要执行命令：

```shell
npm install typescript
```

以安装相关依赖。

tsconfig.json 是 typescript 的配置文件，实例如下：

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules/**/*"],
  "compilerOptions": {
    "target": "es2016",
    "module": "nodenext",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

launch.json 配置文件：

```json
{
  "name": "Launch via NPM",
  "request": "launch",
  "runtimeArgs": ["run", "start"],
  "runtimeExecutable": "npm",
  "skipFiles": ["<node_internals>/**"],
  "type": "node",
  "env": {
    "PROXY_URI": "http://localhost:7890"
  },
  "outputCapture": "std"
}
```

配置说明：

name：名字。

outputCapture：配置程序运行时输出的信息放到哪。需要配置成 std 才能在 debug console 中看到。

env：增加环境变量的配置。不想写死到代码里的内容，就放在这里。我个人最常用。比如，现在想要增加一个代理的配置，这在 dev 环境和 prod 环境是不同的。这时候，可以选择增加一个名为“PROXY_URI”的环境变量，并在 env 里面配置后，就可以在 JavaScript 代码里这样使用：

```javascript
console.log("process.env.PROXY_URI");
```

这样就可以了，不推荐在 package.json 里面使用命令行的方式配置环境变量，不容易维护。

## prettier

prettier 是一个帮助固定代码格式的工具。“缩进是 2 格还是 4 格”，“使用单引号还是双引号”都可以通过 prettier 进行规定。相比于 vscode 自带的 formatter，prettier 插件可以提供更丰富的选项。安装 prettier，需要增加下面的配置：

```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

[typescript]表示这里的配置只对 typescript 类型的文件生效，editor.defaultFormatter 表示指定使用某个 formatter 以覆盖 vscode 自带的 formatter。这样就可以使用 Alt+Shift+F 来使用 prettier 了。

## jest

---
title: 开发javascript项目
date: 2024-06-09
draft: true
---

好久不开发javascript项目，一开始开发就要到处找怎么配置环境。这里做一下记录，不再到处找了。

## nodejs

nodejs是一个javascript运行环境，除了基于v8引擎运行javascript外，还提供了许多基础的库，比如文件访问、多线程处理、环境变量等。

## npm

npm是流行的包管理工具，下面是它的初始化的配置文件package.json（下文中提到配置文件，文件位置默认就在项目根目录）：

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

main是指示软件执行的入口文件，type是使用哪种javascript组件化标准。在script里面进行相应的配置可以通过npm来启动。比如增加一行：

```text
"start": "tsc && node out/index.js"
```

就可以通过下面的命令来进行启动：

```shell
npm run start
```

## typescript

typescript是一个流行的给javascript加上类型的工具，加上类型，便于编写大型软件，减少错误。使用typescript，就不是在写js类型的文件了，而是在写ts文件。typescript提供了编译器，将ts文件编译成js文件，所以与现有的js环境兼容。为了使用typescript，需要执行命令：

```shell
npm install typescript
```

以安装相关依赖。

tsconfig.json是typescript的配置文件，示例如下：

```json
{
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules/**/*"
    ],
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

## jest

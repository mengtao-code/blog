# 基于vscode开发javascript项目

好久不开发javascript项目，一开始开发就要到处找怎么配置环境。这里做一下记录，不再到处找了。

## nodejs

nodejs是一个JavaScript运行环境，除了基于v8引擎运行JavaScript外，还提供了许多基础的库，比如文件访问、多线程处理、环境变量等。

## npm

npm是流行的包管理工具，下面是它的初始化的配置文件package.json（下文中提到配置文件，文件位置默认就在项目根目录）：

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

main是指示软件执行的入口文件，type是使用哪种javascript组件化标准。在script里面进行相应的配置可以通过npm来启动。比如增加一行：

"start": "tsc && node dist/index.js"

就可以通过下面的命令来进行启动：

npm run start

## typescript

typescript是一个流行的给javascript加上类型的工具，加上类型，便于编写大型软件，减少错误。使用typescript，就不是在写js类型的文件了，而是在写ts文件。typescript提供了编译器，将ts文件编译成js文件，所以与现有的js环境兼容。为了使用typescript，需要执行命令：

npm install typescript

以安装相关依赖。

tsconfig.json是typescript的配置文件，实例如下：

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

launch.json配置文件：

        {
            "name": "Launch via NPM",
            "request": "launch",
            "runtimeArgs": [
                "run",
                "start"
            ],
            "runtimeExecutable": "npm",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node",
            "env": {
                "PROXY_URI":"http://localhost:7890"
            },
            "outputCapture": "std"
        }

配置说明：

name：名字。

outputCapture：配置程序运行时输出的信息放到哪。需要配置成std才能在debug console中看到。

env：增加环境变量的配置。不想写死到代码里的内容，就放在这里。我个人最常用。比如，现在想要增加一个代理的配置，这在dev环境和prod环境是不同的。这时候，可以选择增加一个名为“PROXY_URI”的环境变量，并在env里面配置后，就可以在JavaScript代码里这样使用：

console.log("process.env.PROXY_URI");

这样就可以了，不推荐在package.json里面使用命令行的方式配置环境变量，不容易维护。

## prettier

prettier是一个帮助固定代码格式的工具。“缩进是2格还是4格”，“使用单引号还是双引号”都可以通过prettier进行规定。相比于vscode自带的formatter，prettier插件可以提供更丰富的选项。安装prettier，需要增加下面的配置：

{
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}

[typescript]表示这里的配置只对typescript类型的文件生效，editor.defaultFormatter表示指定使用某个formatter以覆盖vscode自带的formatter。这样就可以使用Alt+Shift+F来使用prettier了。

## jest
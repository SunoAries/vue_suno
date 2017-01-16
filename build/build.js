// https://github.com/shelljs/shelljs
require('./check-versions')()   //立即执行！！！想什么呢，瓜皮前端
require('shelljs/global')       //命令行，以后想用node做自动化处理就可以用这个！！！
env.NODE_ENV = 'production'     //不用写两个判断，分成了两个文件，执行两个文件就可以了，
                                // 也可以执行的时候加参数。事实上是加参数，只不过抽象在更高一层加参数

var path = require('path')      //生成路径，非常常用的一个库
var config = require('../config')  //引入配置，把配置进行分离可以非常方便的进行管理。
var ora = require('ora')       //旋转，显示进度，就一个动态效果
var webpack = require('webpack')  //引入webpack，webpack(option,callback)就可以允许webpack
                                  // 这里是项目中依赖安装了webpack
var webpackConfig = require('./webpack.prod.conf') //option

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({ //process是node的全局对象，控制台输出流。
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

module.exports ={
    // 路径配置别名
    publicPath:'./',
    configureWebpack:{
        resolve:{
            alias: {
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}

// const path = require('path');

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
// module.exports = {
//   lintOnSave: true,
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set('@', resolve('src'))
//       .set('@assets',resolve('src/assets'))
//       .set('@common',resolve('src/common'))
//       .set('@components',resolve('src/components'))
//       .set('@network',resolve('src/network'))
//       .set('@views',resolve('src/views'))
//       // 按这种格式.set('', resolve(''))
//   }
// };
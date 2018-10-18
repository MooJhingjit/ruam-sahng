var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // @ is an alias to /src
        '@Views': resolve ('src/Views'),
        '@Layouts': resolve('src/Layouts'),
        '@Components': resolve ('src/Components'),
      }
    }
  }
}
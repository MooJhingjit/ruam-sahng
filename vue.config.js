var path = require('path')
function resolve (dir) {
  // console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // @ is an alias to /src
        '@Assets': resolve ('src/Assets'),
        '@Views': resolve ('src/Views'),
        '@Layouts': resolve('src/Layouts'),
        '@Components': resolve ('src/Components'),
        '@Libraries': resolve ('src/Libraries'),
        '@Config': resolve ('src/Config'),
        '@Services': resolve ('src/Services')
      }
    }
  }
}
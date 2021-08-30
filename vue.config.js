//vue.config.js

module.exports = {
    devServer: {
        host: '0.0.0.0',
        public:'http://localhost:8080/',
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck:true,
        open: true, // Configure to automatically start the browser
      overlay: {
        warnings: true,
        errors: true
      }
    }
  }
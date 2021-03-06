/*eslint-disable no-var*/
var getConfig = require("hjs-webpack");
var config = require("./presentation/config");

var webpackConfig = getConfig({
  in: "./index.jsx",
  out: "dist",
  clearBeforeBuild: true,
  html: config.html,
  port: 3001
});

webpackConfig.module.loaders[0] = {
  test: /(\.js$)|(\.jsx$)/,
  exclude: /node_modules/,
  loaders: [
    "babel-loader?stage=1"
  ]
};

if (process.argv[1].indexOf("webpack-dev-server") !== -1) {
  webpackConfig.module.loaders[0].loaders.unshift("react-hot");
}

module.exports = webpackConfig;

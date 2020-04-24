const webpack = require("webpack");
require("dotenv").config();

const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')


module.exports = withCSS(withSass(withFonts({
  webpack (config, options) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
})))
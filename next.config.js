const webpack = require("webpack");
require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withPreact = require('@zeit/next-preact');

// const withBabelMinify = require('next-babel-minify')({
//   comments: false
// })

const {join} = require('path');
const recursiveCopy = require('recursive-copy');

// WEB PACK PLUGINS
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

// module.exports = withBabelMinify(withCSS(withSass(withFonts({
//   env: {
//     API: "http://localhost:8080",
//     SPACE_ID: "fz8qdsqhkxef",
//     ACCESS_TOKEN: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
//   },
//   webpack (config, options) {
//     config.plugins.push(
//       new webpack.EnvironmentPlugin(process.env)
//     )


    
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     })
//     return config
//   }
// }))))


module.exports = withPlugins(
	[
		withSass,
		withCSS,
		withFonts
	],
	{
		cssModules: false,
    
    // ENV
    env: {
      API: "http://localhost:8080",
      SPACE_ID: "fz8qdsqhkxef",
      ACCESS_TOKEN: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
    },

		webpack: (config, options) => {

			config.plugins.push(
				new webpack.optimize.LimitChunkCountPlugin({
					maxChunks: 1,
				})
			);

			config.optimization.minimizer.push(
				new OptimizeCSSAssetsPlugin({})
			);

			config.plugins.push(
				new BrotliPlugin({
					asset: '[path].br[query]',
					test: /\.(js|css|html|svg)$/,
					threshold: 10240,
					minRatio: 0.8
				})
      );
      
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
	}
);
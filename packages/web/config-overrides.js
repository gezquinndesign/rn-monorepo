const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')

// this will update the process.env with environment variables in .env file
dotenv.config()

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)



// our packages that will now be included in the CRA build step
const appIncludes = [
  resolveApp('src'),
  resolveApp('../components'),
  resolveApp('../components/src/navigation'),
  resolveApp('../../node_modules/react-native-vector-icons'),
]

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
    'navigation-react-native$': 'navigation-react-native-web',
  }

  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => plugin.constructor.name !== 'ModuleScopePlugin',
  )

  
  config.module.rules[0].include = appIncludes
  config.module.rules[1].oneOf[1].include = appIncludes
  config.module.rules[1].oneOf[2].include = appIncludes
  config.module.rules[1].oneOf[2].options.plugins.push(
    require.resolve('babel-plugin-react-native-web'),
    )
    // config.module.rules.unshift({
    //   test: /\.(gif|jpe?g|png|svg)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       name: '[name].[ext]',
    //       esModule: false,
    //     }
    //   }
    // , include: appIncludes })
    
  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: env !== 'production',
      'process.env': JSON.stringify(process.env),
    }),
  )
  const util = require('util')
console.log(util.inspect(config.module.rules, false, null, true /* enable colors */))

  return config
}

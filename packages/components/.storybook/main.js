require('regenerator-runtime/runtime')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const custom = require('../webpack.config')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    'storybook-dark-mode/register',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-vector-icons'],
        // babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    // let fontCssRule = config.module.rules.find(rule => rule.test.toString() === /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/.toString());
    let newCustomRules = custom.module.rules.filter(
      (r) => r.test.toString() !== /\.ttf$/.toString(),
    )
    newCustomRules.concat([
      {
        test: /\.woff(\?.*$|$)/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?.*$|$)/,
        loader: 'url-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ])

    return {
      ...config,
      resolve: {
        alias: { ...config.resolve.alias, ...custom.resolve.alias },
        extensions: [
          ...config.resolve.extensions,
          ...custom.resolve.extensions,
        ],
        plugins: [
          ...(config.resolve.plugins || []),
          ...(custom.resolve.plugins || []),
          new TsconfigPathsPlugin({
            extensions: [
              ...config.resolve.extensions,
              ...custom.resolve.extensions,
            ]
          }),
        ]
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...newCustomRules],
      },
    }
    // const util = require('util')

    // console.log(util.inspect(c, false, null, true /* enable colors */))
    // return c
  },
}

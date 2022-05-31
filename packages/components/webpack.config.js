const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const appIncludes = [
  resolveApp('src'),
  resolveApp('../components'),
  resolveApp('../../node_modules/react-native-vector-icons'),
]

const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-native$': 'react-native-web',
      'navigation-react-native$': 'navigation-react-native-web',
      '@storybook/react-native': '@storybook/react',
      'styled-components/native': 'styled-components',
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.ttf$/,
      //   loader: "url-loader", // or directly file-loader
      //   include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      // },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './fonts/[hash].[ext]',
            },
          },
        ],
        include: [
          path.resolve(__dirname, './src/assets/fonts'),
          path.resolve(__dirname, '../../node_modules/react-native-vector-icons'),
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
      // {
      //   // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
      //   //     the docs page from the markdown
      //   test: /\.(stories|story)\.mdx$/,
      //   use: [
      //     {
      //       // Need to add babel-loader as dependency: `yarn add -D babel-loader`
      //       loader: require.resolve('babel-loader'),
      //       // may or may not need this line depending on your app's setup
      //       options: {
      //         plugins: ['@babel/plugin-transform-react-jsx'],
      //       },
      //     },
      //     {
      //       loader: '@mdx-js/loader',
      //       options: {
      //         compilers: [createCompiler({})],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: appIncludes,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // {
      //   test: /\.mdx?$/,
      //   use: [
      //     'babel-loader',
      //     '@mdx-js/loader'
      //   ]
      // }
      // {
      //   test: /\.mdx?$/,
      //   use: [
      //     // `babel-loader` is optional:
      //     {loader: 'babel-loader', options: {}},
      //     {
      //       loader: '@mdx-js/loader',
      //       /** @type {import('@mdx-js/loader').Options} */
      //       options: {/import { MaterialIcons } from 'react-native-vector-icons/dist/MaterialIcons';
      // * jsxImportSource: …, otherOptions… */}
      //     }
      //   ]
      // },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    static: './',
    hot: true,
  },
}

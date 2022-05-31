require('regenerator-runtime/runtime')

const custom = require('../webpack.config')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native-vector-icons',
        ],
        // babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {

    return {
      ...config,
      resolve: {
        alias: { ...config.resolve.alias, ...custom.resolve.alias },
        extensions: [
          ...config.resolve.extensions,
          ...custom.resolve.extensions,
        ],
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    }
  },
}

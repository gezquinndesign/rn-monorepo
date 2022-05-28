require('regenerator-runtime/runtime')

const custom = require('../webpack.config')

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
     '@storybook/addon-actions',
 '@storybook/addon-knobs',
 {
  name: '@storybook/addon-docs',
  options: {
    configureJSX: true
  },
},
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          // 'react-native-reanimated',
          'react-native-vector-icons',
          '@expo/vector-icons'
          // 'react-native-ui-lib',
          // 'react-native-color',
        ],
        // babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {

    // config.plugins = config.plugins.map((plugin) => {
    //   if (
    //     [
    //       '@babel/plugin-proposal-class-properties',
    //       '@babel/plugin-proposal-private-methods',
    //       '@babel/plugin-proposal-private-property-in-object'
    //     ].includes(plugin)
    //   ) {
    //     return [plugin, { loose: true }]
    //   }
    //   return plugin
    // })
    return {
      ...config,
      resolve: {
        alias: { ...config.resolve.alias, ...custom.resolve.alias },
        extensions: [
          ...config.resolve.extensions,
          ...custom.resolve.extensions,
        ],
      },
      module: { ...config.module, rules: [...config.module.rules,...custom.module.rules] },
    }
  },
}

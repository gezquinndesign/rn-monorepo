const { getDefaultConfig } = require('metro-config')
const path = require('path');

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig()
  return {
    projectRoot: path.resolve(__dirname, '../../'),
    transformer: {
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      sourceExts: [...sourceExts, 'scss', 'sass'],
    },
  }
})()

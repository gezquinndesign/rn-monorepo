module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object',
    '@babel/plugin-proposal-class-properties',
    "@babel/proposal-object-rest-spread",
    'babel-plugin-styled-components',
    [ "react-native-web", { "commonjs": true } ],
    ["module-resolver", {
      "alias": {
        "^react-native$": "react-native-web"
      }
    }]
  ],
}

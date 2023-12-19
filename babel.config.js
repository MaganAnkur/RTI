module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          api: './src/api',
          components: './src/components',
          lib: './src/lib',
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
          hooks: './src/hooks',
          assets: './assets',
        },
      },
    ],
  ],
};

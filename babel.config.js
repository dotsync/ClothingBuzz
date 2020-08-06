// module.exports = {
//   presets: ['@babel/preset-env', '@babel/preset-react'],
// };

// A recommended implementation below:
module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

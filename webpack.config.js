const path = require('path');

module.exports = {
  entry: './dist/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: {
      type: 'commonjs2',
    },
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: true, // 코드 최소화
  },
};

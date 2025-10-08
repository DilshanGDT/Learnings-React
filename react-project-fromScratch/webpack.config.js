const path = require('path');

module.exports = {
  entry: './index.js',      // Entry point of the application
  output: {                 // broswer frendly code
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',  // Output file name
  },
  mode: 'development',
  module: {                 // specify rules
    rules: [
      {
        test: /\.(js|jsx)$/,        // Apply this rule to .js and .jsx files
        exclude: /node_modules/,
        use: {                      // Use babel-loader to transpile the files
            loader: 'babel-loader',
            options: {              // take care the JSX and ES6 syntax
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
      }
    ]
}
}
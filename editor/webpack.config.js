const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  entry: {
    index: path.join(__dirname, "src/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Monaco Editor Sample"
    }),
    new MonacoWebpackPlugin()
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};

/*
entry: {
  popup: path.join(__dirname, 'src/popup/index.tsx'),
  background: path.join(__dirname, 'src/background/index.ts')
},
output: {
  path: path.join(__dirname, '../dist/js'),
  filename: '[name].js'
},
module: {
  rules: [
    {
      exclude: /node_modules/,
      test: /\.tsx?$/,
      use: 'ts-loader'
    }
  ]
},
resolve: {
  extensions: ['.ts', '.tsx', '.js']
}*/

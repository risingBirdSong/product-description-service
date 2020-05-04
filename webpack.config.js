const path = require("path");

const SRC_DIR = path.join(__dirname, "/client");
const DIST_DIR = path.join(__dirname, "/public");

module.exports = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx?/,
  //       include: SRC_DIR,
  //       loader: "babel-loader",
  //       query: {
  //         presets: ["@babel/preset-react", "@babel/preset-env"],
  //       },
  //     },
  //   ],
  // },
};

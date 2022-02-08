const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require("path");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  const runOptions = (env && env.OPTIONS || "").split(",");

  const plugins = [];
  
  if (!isDev) {
    plugins.push(new OptimizeCSSAssetsPlugin({}));
  }
  
  const options = {
    optimization: {
      removeAvailableModules: !isDev,
      removeEmptyChunks: !isDev,
      minimize: !isDev,
      minimizer: isDev ? [] : [
        new TerserPlugin({
          parallel: 4,
        })
      ],
    },    
    entry: {
      "app": "./src/client/app.tsx"
    },
    output: {
      path: path.join(__dirname, "/dist/client/"),
      publicPath: "static/",
      filename: "[name].js",
      chunkFilename: '[name].[contenthash].bundle.js',
      pathinfo: false,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: [
          "cache-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      }],
    },
    plugins: plugins,
  };
  
  if (isDev) {
    options.devtool = "inline-source-map";
    options.watch = true;
  }

  return options;
};

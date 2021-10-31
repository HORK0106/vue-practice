const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // エントリーポイント: ソースとなる JS ファイル
  // ここで指定した JS ファイルに、必要なモジュールをすべて読み込む想定
  entry: "./src/index.js",
  // 出力設定
  output: {
    // 出力先のパス（※絶対パスで指定すること）
    path: path.resolve(__dirname, "public"),
    // バンドル後のファイル名
    filename: "bundle.js",
  },
  // モジュール読み込みの設定
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader", // <style lang="scss">
            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax", // <style lang="sass">
          },
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.(scss$|css$)/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // import文で読み込むモジュールの設定
  resolve: {
    extensions: [".js", ".vue"], // .js, .vue をimport可能に
    modules: ["node_modules"], // node_modulesディレクトリからも import できるようにする
    // vue-template-compilerに読ませてコンパイルするために必要な設定
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  // 実行モード: development => 開発, production => 本番
  // production を指定すると、パッキング後のファイルサイズを削減し、より早く JS ファイルを読み込めるようになる
  // webpack4系以降はmodeを指定しないと警告が出る
  mode: "development",
  plugins: [
    new VueLoaderPlugin(),
    //new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
};

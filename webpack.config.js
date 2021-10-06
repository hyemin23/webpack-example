// nodejs 기본 전역 module
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

// node js 환경에서 동작함 브라우저 환경에서 동작 X
// 할당 연산자를 통하여 옵션을 내보내기.
module.exports = {
  // 파일을 읽어들이기 위한 진입점
  // 기본적으로 webpack은 js 파일을 진입점으로 사용합니다.
  entry: "./js/main.js",

  // 결과물(번들)을 반한하는 설정
  output: {
    // 어떤 경로에 만들건지
    //   주의 : path 속성은 절대경로를 필요로 함 상대경로X

    //   resolve : 1,2번째 경로를 합쳐줌
    //   dirname : 현재 파일이 있는 경로 (현재는 webpack config js 경로)
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    //   이전에 만들었던 파일들 제거
    clean: true,
  },

  module: {
    rules: [
      {
        // 정규식 escape string 사용 $: 앞에 있는 내용으로 끝나는 애들을 찾음
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  //   번들링 후 결과물의 처리 방식 등 다영한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
  ],

  devServer: {
    host: "localhost",
  },
};

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n,
  compiler: {
    removeConsole: true,
    emotion: true,
    // NOTE 만약 console.log 제외한 console을 전부 지우고 싶다면
    // removeConsole: {
    //   exclude: ['log'],
    // }
  },
  // NOTE 크기가 방대한 라이브러리들을 불러올 때, 전부 불러오지 않고 필요한 부부만 불러오는 방법
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // modularizeImports: {
  //   lodash: {
  //     transform: 'lodash/{{member}}',
  //   }
  // }
  // },
};

module.exports = nextConfig;

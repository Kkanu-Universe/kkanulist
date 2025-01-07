const { i18n } = require('./next-i18next.config');
const { resolve } = require('path');

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n,
  webpack: (config, _context) => {
    config.resolve.alias['jotai'] = resolve(__dirname, 'node_modules/jotai');
    return config;
  },
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

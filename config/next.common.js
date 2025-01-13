const { resolve } = require('path');

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
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
  // modularizeImports: {
  //   lodash: {
  //     transform: 'lodash/{{member}}',
  //   }
  // }
  // },
};

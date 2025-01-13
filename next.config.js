const { resolve } = require('path');
const { NODE_ENV, TYPE } = process.env;

const nextConfig = {
  output: 'export',
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
  },
};

if (NODE_ENV === 'production') {
  nextConfig.compiler = {
    ...nextConfig.compiler,
    removeConsole: {
      exclude: ['log'],
    },
  };
  nextConfig.compress = true;
}

if (TYPE && TYPE === 'static') {
  nextConfig.output = 'export';
}

module.exports = nextConfig;

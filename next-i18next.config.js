const { resolve } = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeDetection: true,
    localePath: resolve('./public/locales'),
  },
};

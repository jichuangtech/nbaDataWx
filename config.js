const ENV = 'product';
// const ENV = 'dev';

var config = function (ENV) {
  const config = {};
  config.ENV = ENV;
  config.photoDomain = 'https://www.jichuangtech.site/nbaDataServer';
  switch (ENV) {
    case 'product':
      config.domain = 'https://www.jichuangtech.site/nbaDataServer';
      break;
    case 'dev':
      config.domain = 'http://localhost:8070';
      break;
    default:
      break;
  }
  return config;
}

module.exports = config(ENV);
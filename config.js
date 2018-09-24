const ENV = 'product';
// const ENV = 'dev';

var config = function (ENV) {
  const config = {};
  config.ENV = ENV;
  config.photoDomain = 'https://www.jichuangtech.site/nbadataserver';
  switch (ENV) {
    case 'product':
      config.domain = 'https://www.jichuangtech.site/nbadataserver';
      break;
    case 'dev':
      config.domain = 'http://localhost:8070';
      break;
    default:
      config.domain = 'https://www.ktvme.com';
      break;
  }
  return config;
}

module.exports = config(ENV);
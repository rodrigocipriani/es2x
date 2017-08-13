var deepmerge = require('deepmerge');

var configCreator = function configCreator(props) {
  var defaultConfig = props.defaultConfig,
      development = props.development,
      test = props.test,
      production = props.production;

  var env = { isDevelopment: false, isTest: false, isProduction: false };

  var retorno = void 0;
  var ambiente = process.env.NODE_ENV || '';

  switch (ambiente.toLowerCase()) {
    case 'test':
      env.isTest = true;
      retorno = test;
      break;
    case 'production':
      env.isProduction = true;
      retorno = production;
      break;
    default:
      // case 'DESENVOLVIMENTO':
      env.isDevelopment = true;
      retorno = development;
      break;
  }

  retorno.env = env;

  return deepmerge(defaultConfig, retorno);
};

module.exports = configCreator;
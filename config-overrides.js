const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = function override(config, env) {

  // Adding support for SCSS:
  config.module.rules[1].oneOf[3].test = /\.(css|scss)$/;
  config.module.rules[1].oneOf[3].use.push({
    loader: 'sass-loader'
  })

  // replacing ts-loader with the awesome-typescript-loader
  // config.module.rules[1].oneOf[2].use[0].loader = 'awesome-typescript-loader';

  // console.log(config.plugins);
  // config.plugins.push(new CheckerPlugin());


  return config;
}
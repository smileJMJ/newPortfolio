const webpack = require('../webpack/dev');

module.exports = {
  //stories: ['../stories/**/*.stories.js'],
  stories: ['../src/**/*.stories.tsx', '../src/**/**/*.stories.tsx', '../src/**/view/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config

    //return config;
    console.log(webpack);
    return {
      ...config,
      module: {
        ...config.module,
        rules: webpack.module.rules
      }
    }
  },
};

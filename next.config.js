const dotenv = require('dotenv');
const webpack = require('webpack');

const { parsed } = dotenv.config();

module.exports = {
  serverRuntimeConfig: {
    VIMEO_TOKEN: process.env.VIMEO_TOKEN,
  },
  publicRuntimeConfig: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
};

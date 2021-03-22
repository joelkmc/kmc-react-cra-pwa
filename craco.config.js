const CracoLessPlugin = require('craco-less');
// webpack-config.js
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: {
    plugins: [
      new AntdDayjsWebpackPlugin(),
      new BundleAnalyzerPlugin({ openAnalyzer: true }),
    ],
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#f99d3a',
              'body-background': '#f7fafc',
              'border-radius-base': '6px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

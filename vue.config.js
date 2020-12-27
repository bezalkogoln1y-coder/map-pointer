const path = require('path');
const WebpackNotifier = require('webpack-notifier');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

// console.log(path.resolve(__dirname, 'src/fonts'));

module.exports = () => {
   let configure = {};
   configure.chainWebpack = (config) => {
      config.plugin('notifier').use(WebpackNotifier, [
         {
            title: 'Map Pointer',
            alwaysNotify: true,
            contentImage: path.resolve(__dirname, 'src/assets/logo.png'),
         },
      ]);

      config.plugin('html').tap((args) => {
         args[0].title = 'Map Pointer';
         return args;
      });

      config.resolve.alias.set('@less', path.resolve(__dirname, './src/less'));
      config.output.filename('js/[name].min.js');
      /* config.optimization.splitChunks({
         cacheGroups: {
            default: false,
         },
      }); */
   };

   return configure;
};

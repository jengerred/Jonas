module.exports = {
    module: {
      resolver: {
        fallback: {
          stream: require.resolve('stream-browserify'),
          path: require.resolve('path-browserify'),
          fs: require.resolve('browserify-fs'),
          os: require.resolve('os-browserify/browser'),
          util: require.resolve('util')
        }
      }
    }
  };
module.exports = function () {
    return {
      plugins: [
        ['babel-plugin-react-compiler', {}], // React Compiler must run first!
        // other plugins...
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    };
  };
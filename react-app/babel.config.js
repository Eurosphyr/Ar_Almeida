module.exports = function(api) {
    // This is the missing line that's causing the error
    api.cache(true);
    
    return {
      plugins: [
        ['babel-plugin-react-compiler', {}], // React Compiler must run first!
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    };
  };
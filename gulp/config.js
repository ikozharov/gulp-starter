var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/scss/*.scss",
    dest: dest
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  browserify: {
    debug: true,
    extensions: ['.coffee', '.jsx'],
    bundleConfigs: [{
      entries: src + '/javascript/app',
      dest: dest,
      outputName: 'script.js'
    }]
  }
};

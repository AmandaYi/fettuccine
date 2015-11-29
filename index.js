'use strict';

const Fettuccine = require('fettuccine-class');

const fettuccineInstance = new Fettuccine();

module.exports = function fettuccine(url, options) {
  return fettuccineInstance.get(url, options);
};

module.exports.get = module.exports;

[
  'post',
  'put',
  'patch',
  'head',
  'delete'
].forEach(method => {
  module.exports[method] = (url, options) => module.exports(url, Object.assign(options, {
    method: method.toUpperCase()
  }));
});

module.exports.Fettuccine = Fettuccine;

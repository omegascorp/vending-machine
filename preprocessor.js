// Copyright 2004-present Facebook. All Rights Reserved.

const tsc = require('typescript');
const tsConfig = require('./tsconfig.server.json');
module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
      console.log(tsc.transpile(src, tsConfig, path, []));
      return tsc.transpile(src, tsConfig, path, []);
    }
    return src;
  },
};

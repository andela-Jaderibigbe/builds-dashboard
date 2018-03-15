const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
//---------------------------------------------------------------------
// This is a fix for jest handling static assets like imported images
// when running tests. It's configured in jest section of package.json
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process(src, filename /*, config, options */) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};

const fs = require('fs');
const { processEnglishAAn } = require('./dist/create/createList');
const { series } = require('gulp');

function createAAn(cb) {
  processEnglishAAn('resources/WordNet', 'dist/aan.json', cb);
}

function copyLicences(cb) {
  fs.copyFileSync('./resources/WORDNET_LICENCE', './dist/WORDNET_LICENCE');
  cb();
}

exports.build = series(createAAn, copyLicences);

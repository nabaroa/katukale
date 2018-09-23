//image optimization
const fs = require('fs');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['docs/assets/original/*.jpg'], 'docs/assets/opt/', {use: [imageminPngquant()]}).then(() => {
  console.log('Images optimized');
});
